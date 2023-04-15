
const btnSim = document.getElementById('btn-sim');
const btnNao = document.getElementById('btn-nao');
const opcoes = document.getElementById('opcoes');
const btnLigar = document.getElementById('btn-ligar');
const formularioDenuncia = document.getElementById('Denuncia');
const btnEnviar = document.getElementById('btn-enviar');

 // event listener para o sim
btnSim.addEventListener("click", function() {
 
  opcoes.style.display = "block";

});

 // Não
btnNao.addEventListener("click", function() {

  opcoes.style.display = "none";

});

btnLigar.addEventListener("click", function() {

  window.location.href = "tel: +55 190";

});


formularioDenuncia.addEventListener("submit", function(event) {

 //denuncia 

const textoDenuncia = document.getElementById("texto-denuncia").value;
  
 formularioDenuncia.reset();
  alert("Sua denúncia foi enviada com sucesso!!!! Obrigado pela colaboração!");
 // mensagem de confirmação ao usuário

  });
