function displayPoem(response) {
  let poemResult = response.data.answer;

  new Typewriter("#poem", {
    strings: poemResult,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let input = document.querySelector("#input");

  let apiKey = "7ff3c5ef4330987abab23faeo62t9ee4";
  let prompt = `Generate scottish poem about ${input.value}`;
  let context =
    "Must be short and sweet, max 4 lines. Only return me the poem itself, no other wording should be returned.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemText = document.querySelector("#poem");
  poemText.innerHTML = `<div class="blink">Generating yer poem ya wee dafty ...</div>`;
  axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#form");
poemForm.addEventListener("submit", generatePoem);
