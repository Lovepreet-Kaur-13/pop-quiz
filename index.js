let score = 0;

let answerInput;
let answer;

// Quiz 1
answerInput = prompt(`What does HTML stands for. Please choose correct one?
[1] Hyper Text Markup Language
[2] Hyper Text Marked Language
`);

answer = Number(answerInput);
if (Number.isNaN(answer)) {
  alert("You must enter a number.");
} else if (answer < 1 || answer > 2) {
  alert("You must enter number 1 or 2");
} else {
  if (answer === 1) {
    alert("Correct");
    score += 1;
  } else {
    alert("Wrong");
  }
}

// Quiz 2
answerInput =
  prompt(`html comments start with <!-- and end with -->, Please choose correct one?
[1] True
[2] False
`);

answer = Number(answerInput);
if (Number.isNaN(answer)) {
  alert("You must enter a number.");
} else if (answer < 1 || answer > 2) {
  alert("You must enter number 1 or 2");
} else {
  if (answer === 1) {
    alert("Correct");
    score += 1;
  } else {
    alert("Wrong");
  }
}

// Quiz 3
answerInput =
  prompt(`Which tag is used to create a hyperlink?, Please choose correct one?
[1] <a>
[2] <b>
`);

answer = Number(answerInput);
if (Number.isNaN(answer)) {
  alert("You must enter a number.");
} else if (answer < 1 || answer > 2) {
  alert("You must enter number 1 or 2");
} else {
  if (answer === 1) {
    alert("Correct");
    score += 1;
  } else {
    alert("Wrong");
  }
}

alert(`You just completed the quiz and you scored ${score} out of 3.`);

if (score === 0) {
  alert("You need to study, Better Luck next Time");
} else if (score === 1) {
  alert("You can improve, try again");
} else {
  alert("Your all answers are correct, Congratulations 😊");
}
