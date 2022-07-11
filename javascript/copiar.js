
const btn_copiar = document.querySelector('[data-btn-copiar]');
const copiar =(evento)=>{
 evento.preventDefault();
 copiarTexto();
}

btn_copiar.addEventListener("click", copiar)

function copiarTexto() {
   var texto_copiado = document.getElementById("resultado");
   
   texto_copiado.select();

   document.execCommand("copy");
  
  }