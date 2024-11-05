const request = require('supertest');

describe('Testando rotas de veículos', () => {
    it('Deve retornar uma lista de veículos', async () => {
        const response = await request('https://swapi.dev/api').get('/vehicles');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('results');
    });
});
