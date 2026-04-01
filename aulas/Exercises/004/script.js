function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var bom = document.getElementById('bom')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`

    if (hora >= 0 && hora < 12) {
        // manha
        bom.innerHTML = '<h1>Bom dia</h1>'
        img.src = 'imagens/manha.png'
        document.body.style.background ='#FCC752'

    }
    else if (hora >= 12 && hora < 18) {
        bom.innerHTML = '<h1>Boa tarde</h1>'
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#3C3B31'
    }
    else {
        // noite
        bom.innerHTML = '<h1>Boa Noite</h1>'
        img.src = 'imagens/noite.png'
        document.body.style.background = '#1D2B45'
    }
}