function colorChange() {
  let hexNumbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let hexCode = "";
  for (var i = 0; i < 6; i++) {
    var random_index = Math.floor(Math.random() * hexNumbers.length);
    hexCode += hexNumbers[random_index];
  }
  document.getElementById("hex-code").innerHTML = hexCode;
  document.body.style.background = "#" + hexCode;
}
