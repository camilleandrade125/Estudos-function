function aoclicar(){

    const a = window.document.getElementById('central')
    a.innerText = "CLICOU!"
    a.style.background = 'red'
}

function entrou(){
    let a = window.document.getElementById('central')
    a.innerText ="Entrou"
}

function sair(){
    let a = window.document.getElementById('central')
    a.innerText = "Saiu"
    a.style.background = 'green'
}