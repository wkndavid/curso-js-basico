function carregar(){
var msg = window.document.querySelector('div#msg')
var img = window.document.querySelector('div#imagem')
var data = new Date()  
var hora = 15
// var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas. `
if (hora >= 0 && hora < 12) {
    //Bom Dia!
    img.src = "./manha.png" 
    window.document.body.style.background = '#e2cd9f'
} else if (hora > 12 && hora <= 18){
     //Boa Tarde!
    
    document.body.style.background = '#b9846f'       
 } else{
    // Boa Noite!
    img.src = 'noite.png'
    document.body.style.background = '#515154'        
    }
}