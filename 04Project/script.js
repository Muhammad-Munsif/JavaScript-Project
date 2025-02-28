const flashcards = document.getElementsByClassName("flashcards");
const createBox = document.getElementsByClassName("create-box");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let contentArray = localStorage.getItem("item") ? JSON.parse(localStorage.getItem("item")) : [];

function delFlashCard() {
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}

function addFlashCard(){
   flashcard_info = {
    'my_qusetion' : question.value,
    'my_answer' : answer.value
   }
   contentArray.push(flashcard_info);
   localStorage.setItem('items', JSON.stringify(contentArray));
   divMaker(contentArray[contentArray.length -1])
   question.value = '';
   answer.value = '';
}

contentArray.forEach(divMaker)
function divMaker(text) {
    var div = document.createElement('div');
    var h2_question = document.createElement('h2')
    var h2_answer = document.createElement('h2')
    div.className = 'flashcards'
    h2_question.setAttribute("style", "border:1px solid red; padding : 15px; margin-top : 30px");
    h2_question.innerHTML = text.my_qusetion;
    h2_answer.setAttribute('style', 'text-align : center; display : none; color : red');
    h2_answer.innerHTML = text.my_answer;
    div.appendChild(h2_question);
    div.appendChild(h2_answer)

    div.addEventListener("click", function(){
        if (h2_answer.style.display = "none") {
            h2_answer.style.display = "block";
        }else{
            h2_answer.style.display = "none";
        }
    });
}
function showCreateNewCards(){
    createBox.style.display = "block";
}
function hideCreateBox() {
    createBox.style.display = "none";
}