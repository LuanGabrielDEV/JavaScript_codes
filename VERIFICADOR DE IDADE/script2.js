function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    // Verificação dos dados
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verificar os dados e tente novamente!`)
    } else {
        window.alert(`Tudo Ok!`)
    }
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    // Criando um Img com Id
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    // Idade por Gênero
    if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'IMG/bebe_mas.png')
        } else if (idade < 50) {
            // Jovem
            img.setAttribute('src', 'IMG/jovem_mas.png')
        } else {
            // Idoso
            img.setAttribute('src', 'IMG/idoso_mas.png')
        }
    } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'IMG/bebe_fem.png')
        } else if (idade < 50) {
            // Jovem
            img.setAttribute('src', 'IMG/jovem_fem.png')
        } else {
            // Idoso
            img.setAttribute('src', 'IMG/idodsa_fem.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com idade ${idade} anos.`
    res.appendChild(img)

}
