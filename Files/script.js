function clicar() {
    var resultado = document.querySelector('div.resultado')
    var peso = Number(prompt(`Peso (kg):`))
    var altura = Number(prompt(`Altura (m):`))
    var imc = peso / (altura ** 2)
    var imc_classificacao = undefined

    if (imc < 17) {
        imc_classificacao = 'Muito abaixo do peso'
    } else if (imc >= 17 && imc <= 18.49) {
        imc_classificacao = 'Abaixo do peso'
    } else if (imc >= 18.5 && imc <= 24.99) {
        imc_classificacao = 'Peso normal'
    } else if (imc >= 25 && imc <= 29.99) {
        imc_classificacao = 'Sobrepeso'
    } else if (imc >= 30 && imc <= 34.99) {
        imc_classificacao = 'Obesidade grau I'
    } else if (imc >= 35 && imc <= 39.99) {
        imc_classificacao = 'Obesidade grau II'
    } else {
        imc_classificacao = 'Obesidade grau III'
    }


    switch (imc_classificacao) {
        case ('Abaixo do peso' || 'Sobrepeso' || 'Obesidade grau I'):
            resultado.innerHTML = `<span class="h5"> • IMC: ${imc.toFixed(1)} </span> <span class="alert alert-warning ml-3">${imc_classificacao}</span>`
            break;

        case ('Muito abaixo do peso' || 'Obesidade grau II' || 'Obesidade grau III'):
            resultado.innerHTML = `<span class="h5"> • IMC: ${imc.toFixed(1)} </span> <span class="alert alert-danger ml-3">${imc_classificacao}</span>`
            break;

        case 'Peso normal':
            resultado.innerHTML = `<span class="h5"> • IMC: ${imc.toFixed(1)} </span> <span class="alert alert-success ml-3">${imc_classificacao}</span>`
            break;

        default:
            resultado.innerHTML = `<span class="alert alert-danger">[ERRO] Não foi possível a execução do código JS. Tente novamente.</span>`
    }
}
