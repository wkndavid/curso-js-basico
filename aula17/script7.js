let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

alert('ola')

function add(){
    if(isNumero(num.value) && !inLista(num.value)){
       
    } else {
       window.alert('Valor invalid ou ja existente!')
    }
}

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n){
    if (n.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


