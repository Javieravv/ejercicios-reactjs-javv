export type Question = {
    id: string;
    text_question: string;
    answers: Answer[]
}

export type Answer = {
    id_answer: string;
    text_answer: string;
    is_correct: boolean
}

export type StateQuiz = "init" | "in-course" | "end"

export type ResultsQuestions = {
    orderAnswers: number[];
    selectedAnswer: number;
    correctAnswer: number;
}
