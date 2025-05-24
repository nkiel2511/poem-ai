function generatePoem(event) {
  event.preventDefault();

  poemElement.innerHTML = "Rabbie Burns poem";

  new Typewriter("#poem", {
    strings: "Rabbie Burns poem",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemForm = document.querySelector("#form");
poemForm.addEventListener("submit", generatePoem);
