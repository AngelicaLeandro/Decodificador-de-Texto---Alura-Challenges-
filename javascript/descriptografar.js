const botão_descriptografar = document.querySelector('[data-btn-descriptografar]');


const descriptografar = (evento)=>{
    evento.preventDefault();
    descriptar();
    document.getElementById('resultado').value = descriptar();
}

botão_descriptografar.addEventListener("click",descriptografar);

function descriptar() {
    const input_entrada = document.querySelector('[data-input-entrada');
    const entrada = input_entrada.value;
    let menssagem ;
        
     menssagem = entrada.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    if (menssagem == entrada) {
        return MostrarMensagemDeErro('O texto não está criptografado');
    }

  return menssagem;

}
function MostrarMensagemDeErro(texto){
    alert(texto);
}

