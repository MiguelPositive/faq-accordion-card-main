const response1 = document.getElementById("response-1");
const response2 = document.getElementById("response-2");
const response3 = document.getElementById("response-3");
const response4 = document.getElementById("response-4");
const response5 = document.getElementById("response-5");

const arrow1 = document.getElementById("arrow-1");
const arrow2 = document.getElementById("arrow-2");
const arrow3 = document.getElementById("arrow-3");
const arrow4 = document.getElementById("arrow-4");
const arrow5 = document.getElementById("arrow-5");

const card = document.getElementById("card");

const currentHeight = card.offsetHeight;

let showResponse1 = false;
let showResponse2 = false;
let showResponse3 = false;
let showResponse4 = false;
let showResponse5 = false;

const handleResizeHeight = () => {
  let newHeight = card.offsetHeight;

  if (currentHeight != newHeight) {
    card.style.cssText = "transition: 0.3s";
  }
};

const handleClickShowResponse = (e) => {
  switch (true) {
    case e.target.matches(".question-1"):
      showResponse1 = !showResponse1;

      if (showResponse1) {
        response1.className = "animate__animated animate__fadeIn";
        response1.style.cssText = "display: block; opacity: 1";

        arrow1.style.cssText =
          "transition: 0.4s ease all; transform: rotate(180deg)";
      } else {
        response1.style.cssText = "display: none";
        arrow1.style.cssText =
          "transition: 0.4s ease all; transform: rotate(0deg)";
      }

      break;

    case e.target.matches(".question-2"):
      showResponse2 = !showResponse2;
      if (showResponse2) {
        response2.className = "animate__animated animate__fadeIn";
        response2.style.cssText = "display: block";

        arrow2.style.cssText =
          "transition: 0.4s ease all; transform: rotate(180deg)";
      } else {
        response2.style.cssText = "display: none";
        arrow2.style.cssText =
          "transition: 0.4s ease all; transform: rotate(0deg)";
      }

      break;

    case e.target.matches(".question-3"):
      showResponse3 = !showResponse3;
      if (showResponse3) {
        response3.className = "animate__animated animate__fadeIn";
        response3.style.cssText = "display: block";

        arrow3.style.cssText =
          "transition: 0.4s ease all; transform: rotate(180deg)";
      } else {
        response3.style.cssText = "display: none";
        arrow3.style.cssText =
          "transition: 0.4s ease all; transform: rotate(0deg)";
      }

      break;

    case e.target.matches(".question-4"):
      showResponse4 = !showResponse4;
      if (showResponse4) {
        response4.className = "animate__animated animate__fadeIn";
        response4.style.cssText = "display: block";
        arrow4.style.cssText =
          "transition: 0.4s ease all; transform: rotate(180deg)";
      } else {
        response4.style.cssText = "display: none";
        arrow4.style.cssText =
          "transition: 0.4s ease all; transform: rotate(0deg)";
      }

      break;

    case e.target.matches(".question-5"):
      showResponse5 = !showResponse5;
      if (showResponse5) {
        response5.className = "animate__animated animate__fadeIn";
        response5.style.cssText = "display: block";
        arrow5.style.cssText =
          "transition: 0.4s ease all; transform: rotate(180deg)";
      } else {
        response5.style.cssText = "display: none";
        arrow5.style.cssText =
          "transition: 0.4s ease all; transform: rotate(0deg)";
      }

      break;

    default:
      break;
  }
};

document.addEventListener("click", handleClickShowResponse);
