const Mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/Mongoose/mongoose-setup');

Mongoose.set('strictQuery', true);

const agent = request.agent(app);

const mockProduct = {
  title: 'dutch',
  description: 'rolling organic',
  price: 3.99
};

describe('Testing Product Routes', () => {
  beforeEach(async() => {
    await db.setUp();
  });
  afterEach(async() => {
    await db.dropCollections();
  });
  afterAll(async() => {
    await db.dropDatabase();
  });

  it('Insert Product Test', async () => {
    const response = await agent.post('/products/add').send(mockProduct);

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('dutch');
    expect(response.body.description).toBe('rolling organic');
    expect(response.body.price).toBe(3.99);
  });
});
