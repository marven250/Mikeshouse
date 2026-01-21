const request = require('supertest');
const app = require('../app');

describe('Node.js Server API', () => {


  describe('404 handler', () => {
    it('should return 404 for unknown routes', async () => {
      const res = await request(app).get('/unknown-route');

      expect(res.statusCode).toBe(404);
    });
  });

});
