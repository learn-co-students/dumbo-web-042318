const Question = (function createQuestionClass() {
  let id = 0;
  const all = [];

  return class Question {
    // Object destructuring
    // Look up: Array destructuring
    constructor({ question, incorrect_answers, correct_answer }) {
      this.id = ++id;
      this.question = question;

      // [{answer: 'something', correct: true}, {...}]
      const answers = incorrect_answers.map((ans, index) => {
        return { answer: ans, correct: false, id: index + 1 };
      });
      answers.push({ answer: correct_answer, correct: true, id: answers.length + 1 });

      this.answers = answers;
      all.push(this);
    }

    htmlTemplate() {
      const answerTemplates = this.randomizeAnswers()
        .map(answer => `<li class="answer" data-id="${answer.id}" data-correct="${answer.correct}">${answer.answer}</li>`)
        .join('')

      return `
      <li class="question" data-id="${this.id}">
        <h3>${this.question}</h3>
        <ul class="answers">
          ${answerTemplates}
        </ul>
      </li>
      `
    }

    randomizeAnswers() {
      const a = [...this.answers]
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    isCorrectAnswer(id) {
      const answer = this.answers.find(a => a.id === parseInt(id, 10))
      return answer.correct // true or false
    }

    correctAnswerId() {
      return this.answers.find(a => a.correct).id
    }

    static find(id) {
      return all.find(q => q.id === parseInt(id, 10))
    }
  }
})()
