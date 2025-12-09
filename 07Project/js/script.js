// Dice Roll Program
function rollDice() {
  const numberOfDice = document.getElementById("numberOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImage = document.getElementById("diceImage");
  const values = [];
  const images = [];

  for (let i = 0; i < numberOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(
      `<img src="imagedice/${value}.png" width = "100px" height = "100px">`
    );
  }

  diceResult.textContent = `dice: ${values.join(", ")}`;
  diceImage.innerHTML = images.join("");
}
