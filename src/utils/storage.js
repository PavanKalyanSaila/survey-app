export const saveAnswer = (questionId, answer) => {
  const answers = JSON.parse(localStorage.getItem("surveyAnswers")) || {};
  answers[questionId] = answer;
  localStorage.setItem("surveyAnswers", JSON.stringify(answers));
};

export const getAnswers = () =>
  JSON.parse(localStorage.getItem("surveyAnswers")) || {};

export const setSessionCompleted = () => {
  localStorage.setItem("surveyStatus", "COMPLETED");
};

export const isSessionCompleted = () =>
  localStorage.getItem("surveyStatus") === "COMPLETED";
