function handleAnswerClick(e) {
  // Event delegation
  if (e.target.className === "answer") {
    const answerEl = e.target;
    const answerId = e.target.dataset.id
    const questionEl = e.target.parentElement.parentElement;
    const questionId = questionEl.dataset.id;
    const questionObj = Question.find(questionId);
    const correctAnswerId = questionObj.correctAnswerId();
    const correctAnswerEl = document
      .querySelector(`li.question[data-id="${questionId}"] li.answer[data-id="${correctAnswerId}"]`)

    if (!questionObj.isCorrectAnswer(answerId)) {
      answerEl.classList.replace('answer', 'incorrect')
    }

    // disable the question
    questionEl.classList.add('disabled')

    // display the correct answer
    correctAnswerEl.classList.add('correct')
  }
}

function renderQuestions(questionObjs) {
  const questionsEl = document.querySelector('#questions')
  const questionsTemplates = questionObjs
    .map((q) => new Question(q))
    .map((q) => q.htmlTemplate())
    .join('')

  questionsEl.innerHTML = questionsTemplates
}

function initApplication() {
  document.addEventListener('click', handleAnswerClick)

  OpenTriviaAdapter
    .getRandomQuestions()
    .then(renderQuestions);
}

document.addEventListener('DOMContentLoaded', initApplication);
