const Mongoose = require('mongoose');
const db = require('../lib/Mongoose/mongoose-setup');
const request = require('supertest');
const app = require('../lib/app');

const agent = request.agent(app);
Mongoose.set('strictQuery', true);

const mockUser = {
  name: 'no name',
  username: 'justbegood1',
  email: 'begood1@mail.com',
  password: 'password'
};

const mockPost = {
  name: 'no name',
  prompt: 'rapping dog',
  photo: 'dog rapping',
  authorId: '1'

};

describe('Testing Post Routes', () => {
  beforeAll(async () => {
    await db.setUp();
  });
  afterEach(async() => {
    await db.dropCollections();
  });
  afterAll(async () => {
    await db.dropDatabase();
  });

  it('Testing Add Post Route', async () => {
    await agent.post('/auth/register').send(mockUser);
    const res = await agent.post('/posts/add').send(mockPost);


    expect(res.status).toBe(200);
    expect(res._body.prompt).toEqual(expect.any(String));
    expect(res._body.photo).toEqual(expect.any(String));
    expect(res._body.authorId).toEqual(expect.any(String));
  });
});
