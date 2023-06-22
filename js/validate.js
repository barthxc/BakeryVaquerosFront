$(document).ready(function() {
  $('#formulario').submit(function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    var cantidad = parseInt($('#cantidad').val());
    var email = $('#email').val();
    var telefono = $('#telefono').val();
    var productoSeleccionado = $('#producto').val();
    var opcionPedido = $('input[name="opcionPedido"]:checked').val();

    if (cantidad === 0 || isNaN(cantidad)) {
      alert('Selecciona una cantidad');
      return;
    }

    if (cantidad > 10) {
      alert('¡Demasiada cantidad!');
      return;
    }

    if ($('#nombre').val() === '' || $('#direccion').val() === '') {
      alert('Debe completar al menos el campo Nombre y Dirección');
      return;
    }

    var emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegExp.test(email)) {
      alert('El correo electrónico no es válido');
      return;
    }

    if (productoSeleccionado === '0') {
      alert('Debe elegir al menos un producto');
      return;
    }

    if (!opcionPedido) {
      alert('Debe seleccionar la opción de "Llevar" o "Recoger"');
      return;
    }

    if (telefono === '') {
      alert('Debe ingresar un número de teléfono');
      return;
    }

    var telefonoRegExp = /^\d{9,}$/;
    if (!telefonoRegExp.test(telefono)) {
      alert('Teléfono incorrecto');
      return;
    }

    // Mostrar mensaje de carga
    $('#loader').show();

    // Redireccionar según la opción seleccionada en opcionPedido
    if (opcionPedido === 'llevar') {
      window.location.href = 'html/llevar.html';
    } else if (opcionPedido === 'recoger') {
      window.location.href = 'html/recoger.html';
    } else {
      // Manejar otras opciones o errores si es necesario
    }
  });
});
