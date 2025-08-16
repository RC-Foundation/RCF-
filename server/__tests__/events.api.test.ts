import request from 'supertest';
import express from 'express';
import eventRoutes from '../routes/events';

jest.mock('../utils/scrape', () => {
  const events = [
    {
      id: '1',
      title: 'Mock Event',
      source: 'https://example.org',
      organizer: 'test',
      priority: 1,
      category: 'general',
      deadline: false,
      tags: [],
    },
    {
      id: '2',
      title: 'Missing Fields Event',
      // intentionally omit source and category to test metadata filtering
      organizer: 'test',
      priority: 1,
      deadline: false,
      tags: [],
    } as any,
  ];
  return {
    cache: {
      get: jest.fn(async () => null),
      set: jest.fn(),
      ttl: jest.fn(async () => -2),
    },
    scrapeAndCache: jest.fn(async () => events),
  };
});

const app = express();
app.use('/api/events', eventRoutes);

describe('GET /api/events', () => {
  it('returns events from scraper when cache empty', async () => {
    const res = await request(app).get('/api/events');
    expect(res.status).toBe(200);
    expect(res.body.events.length).toBeGreaterThan(0);
    expect(res.body.metadata).toBeDefined();
  });

  it('omits undefined categories and sources from metadata', async () => {
    const res = await request(app).get('/api/events');
    expect(res.status).toBe(200);
    expect(res.body.metadata.categories).toEqual(['general']);
    expect(res.body.metadata.sources).toEqual(['https://example.org']);
  });
});
