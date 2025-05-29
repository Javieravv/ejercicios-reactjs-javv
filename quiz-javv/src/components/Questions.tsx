import { questions } from "@/data/questions"
import { Question } from "@/types/types-quizzjavv";

interface QuestionsProps {
    handleTerminar: () => void;
    handleNextCurrentQuestion: () => void;
    handlePrevCurrentQuestion: () => void;
    currentQuestion: number;
    handleQuestionAnswer: (currentIndex: number) => void;
    questionTest: Question;
    shuffledAnswers: number[]
}

const Questions = ({
    handleTerminar,
    handleNextCurrentQuestion,
    handlePrevCurrentQuestion,
    currentQuestion,
    handleQuestionAnswer,
    questionTest,
    shuffledAnswers
}: QuestionsProps) => {

    return (
        <section className="section-main section-questions">
            <article className="textquestion">
                <h3>{`Pregunta ${currentQuestion + 1}.`}</h3>
                <p>{questionTest.text_question}</p>
            </article>
            <article className="answers">
                {
                    shuffledAnswers.map((iQuestion, index) =>
                        <div
                            key={questionTest.answers[iQuestion].id_answer}
                            onClick={() => handleQuestionAnswer(index)}
                            className="answers_item"
                        >
                            <p>{`${String.fromCodePoint(97 + index)}.- ${questionTest.answers[iQuestion].text_answer}`}</p>
                        </div>)
                }
            </article>
            <article className="buttons-questions">
                <button
                    onClick={handlePrevCurrentQuestion}
                    disabled={!(currentQuestion > 0)}
                    className="btn buttons-questions__basic"
                >Anterior</button>
                <button
                    onClick={handleNextCurrentQuestion}
                    disabled={!(currentQuestion < questions.length - 1)}
                    className="btn buttons-questions__basic"
                >Siguiente</button>
                <button
                    onClick={handleTerminar}
                    className="btn buttons-questions__end"
                >Terminar</button>
            </article>
        </section>
    )
}

export default Questions