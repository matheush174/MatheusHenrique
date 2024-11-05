const request = require('supertest');

describe('Testando rotas de naves', () => {
    it('Deve retornar uma lista de naves', async () => {
        const response = await request('https://swapi.dev/api').get('/starships');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('results');
    });
});
