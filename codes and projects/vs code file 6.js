
const robotCheckbox = document.getElementById("robot-checkbox");
const challenge = document.getElementById("challenge");
const success = document.getElementById("success");
const imageGrid = document.getElementById("image-grid");
const verifyButton = document.getElementById("verify-button");
const continueButton = document.getElementById("continue-button");
const message = document.getElementById("message");

const tiles = document.querySelectorAll(".tile");

// These are the bicycle tiles
const correctAnswers = ["0", "2", "4", "6", "8"];

robotCheckbox.addEventListener("change", function () {
  challenge.classList.toggle("hidden", !this.checked);

  if (!this.checked) {
    resetChallenge();
    success.classList.add("hidden");
  }
});

// Select or deselect an image.
tiles.forEach(function (tile) {
  tile.addEventListener("click", function () {
    tile.classList.toggle("selected");
    message.textContent = "";
  });
});

// Check the user's answers.
verifyButton.addEventListener("click", function () {
  const selectedTiles = [...tiles]
    .filter(tile => tile.classList.contains("selected"))
    .map(tile => tile.dataset.id);

  const correct =
    selectedTiles.length === correctAnswers.length &&
    correctAnswers.every(id => selectedTiles.includes(id));

  if (correct) {
    challenge.classList.add("hidden");
    success.classList.remove("hidden");
  } else {
    message.textContent =
      "Incorrect selection. Please try again.";
    message.style.color = "#dc2626";
  }
});

// navigation.
continueButton.addEventListener("click", function () {
  window.location.href = "vs code file 7.html";
});

function resetChallenge() {
  tiles.forEach(function (tile) {
    tile.classList.remove("selected");
  });

  message.textContent = "";
}
