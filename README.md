<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Modal</title>
	<link rel="stylesheet" href="modal.css">
	<script src="jquery.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="modal.js" type="text/javascript" charset="utf-8"></script>
</head>
<body>
	<center>
		<h1>Ventana Modal</h1>
	</center>
	<h2>Instalación</h2>
	&lt;link rel="stylesheet" href="modal.css"&gt;<br>
	&lt;script src="jquery.min.js" type="text/javascript" charset="utf-8"&gt;&lt;/script&gt;<br>
	&lt;script src="modal.js" type="text/javascript" charset="utf-8"&gt;&lt;/script&gt;
	<h2>Uso</h2>
	<ul>
		<li>
			Confirmación<br>
			HTML:<br>
			&lt;a href="#" title="Cofirmación" id="confirmacion"&gt;Confirmación&lt;/a&gt;<br>
			JS:<br>
			<pre>
$('#confirmacion').click(function(event) { 
    texto = '&lt;strong&gt;Texto&lt;/strong&gt; ejemplo&lt;br&gt;'+ 
           '¿Realmente desea eliminar el elemento?'; 
    boton = '&lt;a class="red" href="#"&gt;ELIMINAR&lt;/a&gt;';
    ventanaModal("confirmacion", texto, boton);
});				
			</pre>
		</li>
		<li>
			Alerta<br>
			HTML:<br>
			&lt;a href="#" title="Alerta" id="alerta"&gt;Alerta&lt;/a&gt;<br>
			JS:<br>
			<pre>
$('#alerta').click(function(event) { 
	texto = '&lt;strong&gt;Texto&lt;/strong&gt; alerta ejemplo&lt;br&gt;';
	ventanaModal("alerta", texto);
});				
			</pre>
		</li>
		<li>
			Notificación<br>
			HTML:<br>
			&lt;a href="#" title="Notificacíon" id="notificacion"&gt;Notificación&lt;/a&gt;<br>
			JS:<br>
			<pre>
$('#notificacion').click(function(event) {
    texto = '&lt;strong&gt;Texto&lt;/strong&gt; notificación ejemplo';
    ventanaModal("notificacion", texto);
});			
			</pre>
		</li>
		<li>
			Personalizado<br>
			HTML:<br>
			&lt;a href="#" title="Personalizado" id="personalizado"&gt;Personalizado&lt;/a&gt;<br>
			JS:<br>
			<pre>
$('#personalizado').click(function(event) {
    texto = '&lt;strong>Texto&lt;/strong&gt; personalizado';
    boton = '&lt;a class="red" href="#"&gt;BOTON&lt;/a&gt;';
    ventanaModal("personalizado", texto, boton, "Titulo Personalizado");
});		
			</pre>
		</li>
	</ul>
</body>
</html>