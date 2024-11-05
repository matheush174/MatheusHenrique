const request = require('supertest');

describe('Testando rotas de planetas', () => {
    it('Deve retornar uma lista de planetas', async () => {
        const response = await request('https://swapi.dev/api').get('/planets');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('results');
    });
});
