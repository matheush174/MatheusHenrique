const request = require('supertest');

describe('Testando rotas de espécies', () => {
    it('Deve retornar uma lista de espécies', async () => {
        const response = await request('https://swapi.dev/api').get('/species');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('results');
    });
});
