document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Gracias por tu mensaje. Me comunicaré pronto contigo.');
  this.reset(); // Limpiar el formulario
});
