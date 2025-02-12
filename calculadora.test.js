const calculadora = require('./calculadora');

describe('Testes da calculadora', () => {
    test('Somar 5 + 5 deve retornar 10', () => {
        const soma = calculadora.soma(2, 2);
    
        expect(soma).toBe(4);
    })
    
    test('Multiplicar 5 com 5 deve retornar 25', () => {
        const multiplicar = calculadora.multiplicacao(5, 5);
    
        expect(multiplicar).toBe(25);
        expect(multiplicar).toBeGreaterThan(24);
    })
})