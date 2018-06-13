class OpenTriviaAdapter {
  static getRandomQuestions() {
    const baseURL =
      'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';

    return fetch(baseURL)
      .then((resp) => resp.json())
      .then((data) => data.results);
  }
}
