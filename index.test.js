const request = require('supertest'); // To test your Express app
const app = require('./index'); // Assuming index.js exports your Express app

describe('GET /', () => {
    it('should return Hello World!', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('Hello World!');
    });
});
