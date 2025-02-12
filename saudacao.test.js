const saudacao = require('./saudacao')

describe('Teste para saudação', () => {
    test('Deverá retornar "Olá, Maria"', () => {
        const olaMaria = saudacao.dizOla('Maria');
        expect(olaMaria).toBe('Olá, Maria');
        expect(olaMaria).toContain(',');
        expect([olaMaria]).toHaveLength(1);
    })
})