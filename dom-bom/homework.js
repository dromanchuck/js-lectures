let buttonAdd = document.createElement("button");
buttonAdd.innerHTML = "Добавить вопрос";
// buttonAdd.disabled = true; задизэйблить кнопку

let questions = [];

buttonAdd.addEventListener("click", () => {
  let question = prompt("Введите текст вопроса:");

  let answers = new Array(4).fill("").map((_el, index) => {
    let answer = prompt(`Введите вариант ответа ${index + 1}`);

    return answer;
  });

  let correctAnswers = prompt("Введите через запятую правильные варианты");

  let correctAnswersArr = correctAnswers
    .split(",")
    .map((value) => Number(value) - 1);

  let correctAnswersSet = new Set(correctAnswersArr);

  let answersArr = answers.map((answer, index) => ({
    text: answer,
    isCorrect: correctAnswersSet.has(index),
  }));

  console.log({ answersArr });

  let questionObj = {
    question,
    answers: answersArr,
  };

  questions.push(questionObj);

  if (!question) {
    alert("Вы не ввели текст вопроса, попробуйте добавить вопрос еще раз");
  }
});

let buttonBeginTest = document.createElement("button");
let textNode = document.createTextNode("Начать тест");

buttonBeginTest.append(textNode);

document.body.append(buttonAdd, buttonBeginTest);
