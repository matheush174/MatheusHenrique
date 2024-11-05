const request = require('supertest');

describe('Testando rotas de personagens', () => {
    it('Deve retornar uma lista de personagens', async () => {
        const response = await request('https://swapi.dev/api').get('/people');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('results');
    });
});
