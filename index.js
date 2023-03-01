const details = document.querySelectorAll("details");

const arrow1 = document.getElementById("arrow-1");
const arrow2 = document.getElementById("arrow-2");
const arrow3 = document.getElementById("arrow-3");
const arrow4 = document.getElementById("arrow-4");
const arrow5 = document.getElementById("arrow-5");

let temp1 = false;
let temp2 = false;
let temp3 = false;
let temp4 = false;
let temp5 = false;

const handleUpdateArrow = (e) => {
  switch (true) {
    case e.target.matches("#summary-1") || e.target.matches("#arrow-1"):
      temp1 = !temp1;

      if (temp1) {
        arrow1.style.cssText =
          "transition: 0.3s all; transform: rotate(180deg)";
      } else {
        arrow1.style.cssText = "transition: 0.3s all; transform: rotate(0deg)";
      }

      arrow2.style.cssText = "transition: 0.3s all; transform: rotate(0deg)";
      arrow3.style.cssText = "transition: 0.3s all; transform: rotate(0deg)";
      arrow4.style.cssText = "transition: 0.3s all; transform: rotate(0deg)";
      arrow5.style.cssText = "transition: 0.3s all; transform: rotate(0deg)";

      break;

    case e.target.matches("#summary-2") ||
      e.target.matches("#arrow-2") ||
      e.target.matches("#strong"):
      temp2 = !temp2;

      if (temp2) {
        arrow2.style.cssText =
          "transition: 0.3s all; transform: rotate(180deg)";
      } else {
        arrow2.style.cssText = "transition: 0.3s all; transform: rotate(0deg)";
      }

      arrow1.style.cssText = "transition: 0.3s all; transform: rotate(0deg)";
      arrow3.style.cssText = "transition: 0.3s all; transform: rotate(0deg)";
      arrow4.style.cssText = "transition: 0.3s all; transform: rotate(0deg)";
      arrow5.style.cssText = "transition: 0.3s all; transform: rotate(0deg)";

      break;

    case e.target.matches("#summary-3") || e.target.matches("#arrow-3"):
      temp3 = !temp3;

      if (temp3) {
        arrow3.style.cssText =
          "transition: 0.3s all; transform: rotate(180deg)";
      } else {
        arrow3.style.cssText = "transition: 0.3s all; transform: rotate(0deg)";
      }

      break;

    case e.target.matches("#summary-4") || e.target.matches("#arrow-4"):
      temp4 = !temp4;

      if (temp4) {
        arrow4.style.cssText =
          "transition: 0.3s all; transform: rotate(180deg)";
      } else {
        arrow4.style.cssText = "transition: 0.3s all; transform: rotate(0deg)";
      }

      break;

    case e.target.matches("#summary-5") || e.target.matches("#arrow-5"):
      temp5 = !temp5;

      if (temp5) {
        arrow5.style.cssText =
          "transition: 0.3s all; transform: rotate(180deg)";
      } else {
        arrow5.style.cssText = "transition: 0.3s all; transform: rotate(0deg)";
      }

      break;
    default:
      break;
  }
};

document.addEventListener("click", handleUpdateArrow);

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
