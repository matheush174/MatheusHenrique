const request = require('supertest');

describe('Testando rota de nave específica', () => {
    it('Deve retornar informações da nave Millennium Falcon', async () => {
        const response = await request('https://swapi.dev/api').get('/starships/10/');
        expect(response.status).toBe(200);
        expect(response.body.name).toBe('Millennium Falcon');
    });
});
