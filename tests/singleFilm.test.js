const request = require('supertest');

describe('Testando rota de filme específico', () => {
    it('Deve retornar informações do filme Uma Nova Esperança', async () => {
        const response = await request('https://swapi.dev/api').get('/films/1/');
        expect(response.status).toBe(200);
        expect(response.body.title).toBe('A New Hope');
    });
});
