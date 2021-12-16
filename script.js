let answerDisplay = document.getElementById("answers");
const question = document.getElementById("question");
const askBtn = document.getElementById("ask-btn");

function getRandomNumber(maxNumber) {
  return Math.round(Math.random() * maxNumber);
}

askBtn.addEventListener("click", function () {
  let img = document.createElement("img");
  img.src = "images/eightBallShake.gif";
  answerDisplay.appendChild(img);

  setTimeout(() => {
    let randomNumber = getRandomNumber(5);
    if (randomNumber === 0) {
      img.src = "images/eightBall-yes.png";
    } else if (randomNumber === 1) {
      img.src = "images/eightBall-no.png";
    } else if (randomNumber === 2) {
      img.src = "images/eightBall-maybe.png";
    } else if (randomNumber === 3) {
      img.src = "images/eightBall-askAgain.png";
    } else {
      img.src = "images/eightBall-cannotTell.png";
    }
  }, 2000);

  let askedQuestion = question.value;
  question.innerHTML = askedQuestion;

  setTimeout(() => {
    answerDisplay.innerText = "";
    question.innerHTML = "";
  }, 5000);
});
