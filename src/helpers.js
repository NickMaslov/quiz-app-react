export const shuffleAnswers = (question) => {
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];

  return unshuffledAnswers
    .map((unshuffledAnswer) => ({
      sort: Math.random(),
      value: unshuffledAnswer,
    }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

export const normalizeQuestions = (backendQuestions) => {
  return backendQuestions.map((backendQuestion) => {
    const incorrectAnswers = backendQuestion.incorrect_answers.map((ans) =>
      decodeURIComponent(ans)
    );
    return {
      correctAnswer: decodeURIComponent(backendQuestion.correct_answer),
      incorrectAnswers,
      question: decodeURIComponent(backendQuestion.question),
    };
  });
};
