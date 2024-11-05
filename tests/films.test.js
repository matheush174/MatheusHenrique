const request = require('supertest');

describe('Testando rotas de filmes', () => {
    it('Deve retornar uma lista de filmes', async () => {
        const response = await request('https://swapi.dev/api').get('/films');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('results');
    });
});
