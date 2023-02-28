const detalles = document.querySelectorAll("details");

// Agregar un evento de clic a cada elemento `details`
detalles.forEach(function (detalle) {
  detalle.addEventListener("click", function () {
    // Cerrar cualquier otro elemento `details` que esté abierto

    detalle.parentElement
      .querySelectorAll("details[open]")
      .forEach(function (openDetails) {
        if (openDetails !== detalle) {
          openDetails.removeAttribute("open");
        }
      });
  });
});
