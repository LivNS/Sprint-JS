
var btnSim = document.getElementById('btn-sim');
var btnNao = document.getElementById('btn-nao');
var opcoes = document.getElementById('opcoes');
var btnLigar = document.getElementById('btn-ligar');
var formularioDenuncia = document.getElementById('Denuncia');
var btnEnviar = document.getElementById('btn-enviar');

 // event listener para o sim
btnSim.addEventListener("click", function() {
 
  opcoes.style.display = "block";

});

 // para o não
btnNao.addEventListener("click", function() {

  opcoes.style.display = "none";

});

// para o "ligar"
btnLigar.addEventListener("click", function() {

  window.location.href = "tel: +55 190";

});

// e para o enviar
formularioDenuncia.addEventListener("submit", function(event) {

    var textoDenuncia = document.getElementById("texto-denuncia").value;

//mensagem finalização

    formularioDenuncia.reset();
 
        alert("Sua denúncia foi enviada com sucesso!!!! Obrigado pela colaboração!");

  });
  
