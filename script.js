const level1Strings = ["String 1A", "String 1B", "String 1C"];
const level2Strings = ["String 2A", "String 2B", "String 2C"];
const level3Strings = ["String 3A", "String 3B", "String 3C"];

function getRandomString(strings) {
  const randomIndex = Math.floor(Math.random() * strings.length);
  return strings[randomIndex];
}

function showRandomString(level) {
  const randomString = getRandomString(level);
  document.body.innerHTML = `
    <div class="container">
      <h1>Random String</h1>
      <p>${randomString}</p>
      <button id="backBtn">Back to Home</button>
    </div>
  `;

  const backBtn = document.getElementById("backBtn");
  backBtn.addEventListener("click", () => {
    location.reload();
  });
}

document.getElementById("level1").addEventListener("click", () => {
  showRandomString(level1Strings);
});

document.getElementById("level2").addEventListener("click", () => {
  showRandomString(level2Strings);
});

document.getElementById("level3").addEventListener("click", () => {
  showRandomString(level3Strings);
});
