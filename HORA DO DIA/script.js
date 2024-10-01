function carregar() {

    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()



    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = '/HORA DO DIA/IMG/manha.png'
        document.body.style.background = '#D9C76C'
    } else if (hora > 12 && hora < 18) {
        //BOA TARDE
        img.src = '/HORA DO DIA/IMG/tarde.png'
        document.body.style.background = '#F26B1D'
    } else {
        //BOA NOITE
        img.src = '/HORA DO DIA/IMG/noite.png'
        document.body.style.background = '#0D0D0D'
    }
}

