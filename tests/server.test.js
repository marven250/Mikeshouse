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

  });

  describe('404 handler', () => {
    it('should return 404 for unknown routes', async () => {
      const res = await request(app).get('/unknown-route');

      expect(res.statusCode).toBe(404);
    });
  });

});
