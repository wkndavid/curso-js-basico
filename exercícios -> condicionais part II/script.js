function verificar(params) {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id.', 'foto')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifque os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada ${idade}!`
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10 ) {
                img.setAttribute('src', 'nicolas.png')
            } else if(idade < 21){
                img.setAttribute('src', 'jovemenino.png')
            } else if (idade < 50){
                img.setAttribute('src', 'foto2.png')
            } else {
                img.setAttribute('src', 'idosohomem.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10 ) {
                img.setAttribute('src', 'criancamenina.png')
            } else if(idade < 21){
               img.setAttribute('src', 'foto1.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adultomulher.png')
            } else {
                img.setAttribute('src', 'idosamulher.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
    }
}