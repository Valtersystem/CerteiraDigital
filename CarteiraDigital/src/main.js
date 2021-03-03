
// Guardando os valores do input
function pegaValor(){
    let nomeCarteira = document.getElementById("titulo").value;
    let rendaAtual = parseFloat(document.getElementById("renda").value);
}


// Evento que é executado toda vez que uma tecla for pressionada no input
document.getElementById("enviar").onkeypress = function(e) {
    // 13 é a tecla <ENTER>. Se ela for pressionada, mostrar o valor
    if (e.keyCode == 13) {
        pegaValor();
        e.preventDefault();
    }
}

// Evento que é executado ao clicar no botão de enviar
document.getElementById("enviar").onclick = function(e) {
    pegaValor();
    e.preventDefault();
}



