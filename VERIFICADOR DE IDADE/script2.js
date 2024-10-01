function verificar() {
    var data = new Data()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert(`[ERRO] Verificar os dados e tente novamente!`)
    } else {
        alert(`Tudo Ok!`)
    }

}