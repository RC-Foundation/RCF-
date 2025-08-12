interface CacheEntry<T> {
  data: T;
  expiry: number;
}

// In-memory cache map
const cache = new Map<string, CacheEntry<any>>();

/**
 * Set a value in the cache with TTL
 * @param key Cache key
 * @param value Value to store
 * @param ttlMs Time-to-live in milliseconds
 */
export function setCache<T>(key: string, value: T, ttlMs: number): void {
  const expiry = Date.now() + ttlMs;
  cache.set(key, { data: value, expiry });
}

/**
 * Get a value from the cache
 * @param key Cache key
 * @returns The cached value or null if expired/not found
 */
export function getCache<T>(key: string): CacheEntry<T> | null {
  const entry = cache.get(key) as CacheEntry<T> | undefined;

  if (!entry) {
    return null;
  }

  // Check if entry has expired
  if (entry.expiry < Date.now()) {
    cache.delete(key);
    return null;
  }

  return entry;
}

/**
 * Clear an entry from the cache
 * @param key Cache key
 */
export function clearCache(key: string): void {
  cache.delete(key);
}

/**
 * Clear all entries from the cache
 */
export function clearAllCache(): void {
  cache.clear();
}

/**
 * Get all cache keys that match a prefix
 * @param prefix Key prefix to match
 * @returns Array of matching keys
 */
export function getCacheKeys(prefix: string = ''): string[] {
  return Array.from(cache.keys()).filter((key) => key.startsWith(prefix));
}

/**
 * Get cache statistics
 */
export function getCacheStats(): { size: number; keys: string[] } {
  return {
    size: cache.size,
    keys: Array.from(cache.keys()),
  };
}
