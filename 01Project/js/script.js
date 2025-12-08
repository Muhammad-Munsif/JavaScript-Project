let index = 0;

function changeColors() {
    const colors = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Orange",
        "Purple",
        "Pink",
        "Brown",
        "Gray",
        "Black",
        "White",
        "Cyan",
        "Magenta",
        "Lime",
        "Teal"
      ];
      
    // we will target the body tag and to take the background color
    document.getElementsByTagName('body')[0].style.background = colors[index++] // it will increament one color to another color
    
    // after that we used a conditon if index is greater than from the colors.length-1 
    if (index > colors.length-1) {
        index = 0; 
    }
}

// second Project of change the qoute
let changeQouteIndex = 0;

const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don’t watch the clock; do what it does. Keep going.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Believe you can and you're halfway there.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "Don’t let yesterday take up too much of today.",
    "Act as if what you do makes a difference. It does.",
    "It always seems impossible until it’s done.",
    "Do what you can, with what you have, where you are.",
    "Your time is limited, don’t waste it living someone else’s life.",
    "In the middle of every difficulty lies opportunity.",
    "Dream big and dare to fail."
  ];
   

function changeQoute() {
    document.getElementsByTagName("p")[0].innerHTML = quotes[changeQouteIndex++]
    
    if (changeQouteIndex > quotes.length - 1) {
        changeQouteIndex = 0;        
    }
}
