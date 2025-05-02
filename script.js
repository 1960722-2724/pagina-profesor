document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensaje enviado. ¡Gracias por contactarme!');
  });
  
  // Simulación de carga de testimonios
  const testimonios = [
    "Andrés me ayudó a pasar álgebra. ¡100% recomendado!",
    "Las clases de programación son claras y prácticas.",
    "Excelente atención y paciencia. Lo recomiendo mucho."
  ];
  
  const contenedor = document.getElementById('testimoniosContainer');
  testimonios.forEach((texto, i) => {
    const p = document.createElement('p');
    p.textContent = texto;
    contenedor.appendChild(p);
  });
  
  function mostrarPublicidad() {
    alert("¡Gracias por tu interés! Pronto verás promociones aquí.");
  }
  