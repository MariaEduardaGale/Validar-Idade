/** @jest-environment jsdom */

const { validarIdade } = require("./script")

test ("Verificar se é maior de Idade", function () {
    var maiorIdade = validarIdade ("18");
    expect(maiorIdade).toBe(true); 
})

test ("Verificar se é menor de Idade", function () {
    var menorIdade = validarIdade("17");
    expect(menorIdade).toBe(false); 
})


