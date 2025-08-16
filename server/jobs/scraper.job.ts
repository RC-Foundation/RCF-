import { scraperQueue } from '../utils/queue';
import { EventScraper } from '../scrapers/event.scraper';
import type { Job } from 'bull';

scraperQueue.process(async (job: Job<{ url: string }>) => {
  const { url } = job.data;
  const scraper = new EventScraper();
  const events = await scraper.scrape(url);

  await job.progress(100);
  return events;
});

scraperQueue.add(
  'scrape-all',
  { url: 'all' },
  {
    repeat: {
      cron: '0 */6 * * *',
    },
  }
);
