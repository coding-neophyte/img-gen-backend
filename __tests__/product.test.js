const Mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');

Mongoose.set('strictQuery', true);

const agent = request.agent(app);

const mockProduct = {
  title: 'dutch',
  description: 'rolling organic',
  price: 3.99
};

describe('Testing Product Routes', () => {
  beforeAll(async() => {
    await Mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });


  afterAll(async() => {
    await Mongoose.disconnect();
  });
  
  it('Insert Product Test', async () => {
    const response = await agent.post('/products/add').send(mockProduct);

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('dutch');
    expect(response.body.description).toBe('rolling organic');
    expect(response.body.price).toBe(3.99);
  });
  it('Get Products test', async () => {
    const newProduct = await agent.post('/products/add').send(mockProduct);
    await agent.get('/products');

    expect.arrayContaining(newProduct);
  });
});
