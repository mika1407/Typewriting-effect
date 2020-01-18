const texts = ["websites.", "JavaScript coding.", "good pancakes!"];
let count = 0; // 0, 1, 2
let index = 0; // individual letters
let currentText = ""; // text what is currently selected
let letter = ""; // individual letter

// Self invoked every 0.4 seconds
(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count]; // current word in array
  letter = currentText.slice(0, ++index); // current character

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 400);
})();
