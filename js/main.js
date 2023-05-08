function enviarFormulario() {
  let mensaje;
  let nombre = document.querySelector("#inputNombre").value;
  let mail = document.querySelector("#inputEmail").value;
  let tel = document.querySelector("#inputTel").value;
  let msj = document.querySelector("#inputMsj").value;
  mensaje =
    encodeURI(`Hola! mi nombre es ${nombre}, mi correo electronico es ${mail},
  mi teléfono es: ${tel} y esta es mi consulta: ${msj}`);
  let url = `https://api.whatsapp.com/send?phone=5493516173138&text=${mensaje}`;
  window.open(url, "_blank");
}
