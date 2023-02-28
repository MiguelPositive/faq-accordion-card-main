const details = document.querySelectorAll("details");

// Agregar un evento de clic a cada elemento `details`
details.forEach(function (detail) {
  detail.addEventListener("click", function () {
    // Cerrar cualquier otro elemento `details` que esté abierto

    detail.parentElement
      .querySelectorAll("details[open]")
      .forEach(function (openDetails) {
        if (openDetails !== detail) {
          openDetails.removeAttribute("open");
        }
      });
  });
});
