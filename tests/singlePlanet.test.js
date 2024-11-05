const request = require('supertest');

describe('Testando rota de planeta específico', () => {
    it('Deve retornar informações do planeta Tatooine', async () => {
        const response = await request('https://swapi.dev/api').get('/planets/1/');
        expect(response.status).toBe(200);
        expect(response.body.name).toBe('Tatooine');
    });
});
