import { gera } from "./classe.js";



async function gerar_senha(qtd_caracteres,min,mai,num,exp) {

    let res = await fetch('dados.json')

    let dados = await res.json()

    let g = new gera()

    g.gerador(qtd_caracteres,min,mai,num,exp,dados)
    
}

let btn = document.querySelector('button')

btn.addEventListener('click',testar)

function testar(){

    let min = document.getElementById('min').checked
    let mai = document.getElementById('mai').checked
    let num = document.getElementById('num').checked
    let exp = document.getElementById('exp').checked

    let qtd_caracteres = document.getElementById('caracteres').value

    gerar_senha(qtd_caracteres,min,mai,num,exp)
}










