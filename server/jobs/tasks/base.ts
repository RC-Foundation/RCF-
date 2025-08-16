import { logger } from '../../utils/logger';
import { setCache, getCache } from '../../cache/cacheManager';

interface RetryOptions {
  retries?: number;
  initialDelay?: number;
  maxDelay?: number;
  backoffFactor?: number;
}

export interface TaskResult {
  value: number;
  updated: string;
  change?: number;
  source: string;
  lastUpdated?: string;
}

export abstract class BaseTask {
  protected name: string;
  protected cacheKey: string;
  protected ttlMs: number;

  constructor(name: string, cacheKey: string, ttlMs: number) {
    this.name = name;
    this.cacheKey = cacheKey;
    this.ttlMs = ttlMs;
  }

  async execute(): Promise<void> {
    try {
      logger.info(`Starting ${this.name} refresh...`);

      // Check if we should skip this refresh
      if (await this.shouldSkip()) {
        logger.info(`Skipping ${this.name} refresh - data still fresh`);
        return;
      }

      const result = await this.fetchWithRetry();

      if (result) {
        setCache(this.cacheKey, result, this.ttlMs);
        logger.info(`${this.name} refresh completed successfully`);
      } else {
        logger.warn(`${this.name} refresh returned no data`);
      }
    } catch (error) {
      logger.error(`${this.name} refresh failed:`, error);
      // Don't throw - let other tasks continue
    }
  }

  protected abstract fetchData(): Promise<TaskResult | null>;

  protected async fetchWithRetry(
    options: RetryOptions = {}
  ): Promise<TaskResult | null> {
    const {
      retries = 3,
      initialDelay = 1000,
      maxDelay = 10000,
      backoffFactor = 2,
    } = options;

    let lastError: Error | null = null;
    let delay = initialDelay;

    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const result = await this.fetchData();
        if (result) return result;

        // If fetchData returns null, we'll retry
        throw new Error('No data returned');
      } catch (error) {
        lastError = error as Error;

        if (attempt === retries) {
          break; // Last attempt failed
        }

        logger.warn(
          `${this.name} attempt ${attempt + 1} failed, retrying in ${delay}ms...`
        );
        await this.sleep(delay);
        delay = Math.min(delay * backoffFactor, maxDelay);
      }
    }

    throw lastError;
  }

  protected async shouldSkip(): Promise<boolean> {
    // Check if we have recent data in cache
    const cached = getCache<TaskResult>(this.cacheKey);
    if (cached) {
      const age =
        Date.now() -
        new Date(cached.data.lastUpdated || cached.data.updated).getTime();
      if (age < this.ttlMs * 0.8) {
        // If data is more than 80% fresh, skip
        return true;
      }
    }
    return false;
  }

  protected async sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  protected async fetchJSON(url: string, options: any = {}): Promise<any> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          'User-Agent': 'Syria-Recovery-Dashboard/1.0',
          ...options.headers,
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const contentType = response.headers.get('content-type');

      if (contentType?.includes('application/json')) {
        return await response.json();
      } else {
        return await response.text();
      }
    } finally {
      clearTimeout(timeoutId);
    }
  }

  protected async fetchCSV(url: string, options: any = {}): Promise<any[]> {
    const text = await this.fetchJSON(url, {
      ...options,
      headers: {
        ...options.headers,
        Accept: 'text/csv',
      },
    });

    // Simple CSV parser - replace with proper library if needed
    const lines = text.split('\n');
    const headers = lines[0].split(',');

    return lines.slice(1).map((line: string) => {
      const values = line.split(',');
      return headers.reduce(
        (obj: Record<string, any>, header: string, index: number) => {
          obj[header.trim()] = values[index] ? values[index].trim() : null;
          return obj;
        },
        {} as Record<string, any>
      );
    });
  }
}
