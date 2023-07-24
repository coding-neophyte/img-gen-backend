const Mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/Mongoose/mongoose-setup');

const agent = request.agent(app);
Mongoose.set('strictQuery', true);

const mockUser = {
  name: 'no name',
  username: 'justbegood1',
  email: 'begood1@mail.com',
  password: 'password'
};


describe('Testing User Routes', () => {
  beforeEach(async() => {
    await db.setUp();
  });

  afterEach(async () => {
    await db.dropCollections();
  });


  afterAll(async() => {
    await db.dropDatabase();
  });


  it('Testing Sign In Router', async () => {
    const res = await agent.post('/auth/register').send(mockUser);

    expect(res.status).toBe(200);
    expect(res.body.name).toEqual(expect.any(String));
    expect(res.body.username).toEqual(expect.any(String));
    expect(res.body.email).toEqual(expect.any(String));
    expect(res.body.password).toEqual(expect.any(String));
  });
});
