const request = require('supertest');

describe('Testando rota inexistente', () => {
    it('Deve retornar erro 404 para rota inexistente', async () => {
        const response = await request('https://swapi.dev/api').get('/heroes');
        expect(response.status).toBe(404);
    });
});
