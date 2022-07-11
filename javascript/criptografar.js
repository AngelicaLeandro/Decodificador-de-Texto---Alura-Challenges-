/*
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/

const botão_criptografar = document.querySelector('[data-btn-criptografar]');

const criptografar = (evento)=>{
    evento.preventDefault();
    const input_entrada = document.querySelector('[data-input-entrada');
    const entrada = input_entrada.value;
    let menssagem =  entrada.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat'); 
    var erros = validarInput(entrada,menssagem);
    if (erros.length > 0){
        var mensagemErro = document.querySelector("#mensagens-erro");    
        const conteudo = `<li>&excl;  ${erros} </li>`;
        mensagemErro.innerHTML = conteudo;
        return;
    }
 
    document.getElementById('resultado').value = menssagem;
    
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
}

botão_criptografar.addEventListener("click",criptografar);

    function validarInput(entrada,menssagem){
    var letras = /[A-Z-À-Ú]/g;
    var acentos = /[à-ú]/g;
    var numeros =/[0-9]/g;
    var erros = [];
    
    if(entrada.length == 0){
        erros.push("Nem um nome inserido")
      
    }
    if(entrada!=0 && entrada == menssagem){
        erros.push("Texto não criptografável")
    }
    if(entrada.match(letras)){
       erros.push("Use apenas letras minúsculas")
    } 
    if(entrada.match(numeros)){
        erros.push("Não use números");
     } 
    if(entrada.match(acentos)){
       erros.push("Não use acentos")
    }
    return erros;
    }

    var exibirErro = (erros)=>{
      var ul = document.querySelector("#mensagens-erro");
      ul.innerHTML = "";

      erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
    }



