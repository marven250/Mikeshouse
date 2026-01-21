const request = require('supertest');
const app = require('../app');

describe('Node.js Server API', () => {

  describe('GET /', () => {
    it('should return server running message', async () => {
      const res = await request(app).get('/');

      expect(res.statusCode).toBe(200);
      expect(res.text).toBe('Node.js server is running 🚀');
    });
  });

  describe('GET /api/hello', () => {
    it('should return hello message', async () => {
      const res = await request(app).get('/api/hello');

      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({
        message: 'Hello from the server!'
      });
    });
  });

  describe('POST /api/data', () => {
    it('should accept and return posted data', async () => {
      const payload = { name: 'Test', age: 25 };

      const res = await request(app)
        .post('/api/data')
        .send(payload)
        .set('Content-Type', 'application/json');

      expect(res.statusCode).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.received).toEqual(payload);
    });
  });

  describe('404 handler', () => {
    it('should return 404 for unknown routes', async () => {
      const res = await request(app).get('/unknown-route');

      expect(res.statusCode).toBe(404);
    });
  });

});
