export function toQuestionWithResponse(
  question: Question
): QuestionWithResponse {
  return {
    ...question,
    response: "",
  };
}
