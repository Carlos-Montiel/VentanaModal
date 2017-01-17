/*Modal*/
/*modal de confirmacion*/
function cierraModal () {
  $("#contenedor-modal").fadeOut('fast', 'linear', function(){
    $("#contenedor-modal").remove();
  }); 
  
}
function ventanaModal (tipo, texto, boton, titulo) {
  botonOk = '<a onclick="cierraModal();"><strong class="green">OK</strong></a>';
  botonCancelar = '<a onclick="cierraModal();" class="red">CANCELAR</a>';
  if(boton == undefined){ boton = "" }
  if (tipo == "confirmacion") {
    titulo = 'Confirmación';
    botonDos = ' | ' + botonCancelar;
    icono = "¿?";
  }else if (tipo == "alerta") {
    titulo = 'Alerta';
    boton = "";
    botonDos = botonOk;
    icono = "¡!";
  }else if (tipo == "notificacion") {
    titulo = 'Notificación';
    boton = "";
    botonDos = botonOk; 
    icono = "ok";
  }else if (tipo == "personalizado") {
    botonDos = botonOk;
    icono = "ok";
  }else {
    titulo = 'Alerta';
    boton = "";
    botonDos = botonOk;
    icono = "¡ !";
  }
   modal = '<div id="contenedor-modal">'+
      '<div class="fondo-modal" onclick="cierraModal();"></div>' +
      '<div class="ventana-modal">'+
        '<div class="contenido-modal">'+
        '<div class="fondo-icono" class="red">'+ icono +'</div>'+
          '<button type="button" class="cierra-modal" onclick="cierraModal();">×</button>'+
          '<br>'+
          '<span class="titulo-modal">'+ titulo +'</span><br>'+
          '<p class="texto-modal">' + texto + '</p><br>'+
          '<div id="botones-modal">' +
            boton + " " + botonDos +
        '</div>'+
      '</div>'+   
    '</div>';
 $('body').append(modal);
  $("#contenedor-modal").fadeIn('fast', 'linear'); 
}