import { Cardsheetresults } from "@/components/Cardsheetresults"
import { Question, ResultsQuestions } from '@/types/types-quizzjavv';
import { useRef, useState } from "react";

interface ResultSheetProps {
    questions: Question[];
    tableResults: ResultsQuestions[];
}

export const ResultSheet = ({
    questions,
    tableResults,
}: ResultSheetProps) => {
    const [viewAnswerds, setViewAnswerds] = useState(false)
    const totalQuestionsAnswered = useRef<number>(0)
    const totalAnswersCorrect = useRef<number>(0)

    const updateTotalQuestionsAnswered = () => {
        const totalQuestions = tableResults.reduce( (acc, result) => result.selectedAnswer !== -1 ? acc + 1 : acc, 0)
        const totalQuestionsCorrect = tableResults.reduce( (acc, result) => 
            (result.selectedAnswer !== -1 && result.selectedAnswer === result.correctAnswer) ? acc + 1 : acc, 0)
        totalQuestionsAnswered.current = totalQuestions
        totalAnswersCorrect.current = totalQuestionsCorrect
    }

    updateTotalQuestionsAnswered()

    return (
        <section className="section-sheetresults section-main">
            <h2>Tarjeta de Resultados</h2>
            <article className="cards_sheetresults">
                {
                    questions.map((question, index) => (
                        <Cardsheetresults
                            key={`Pregunta ${index + 1}`}
                            text={`Pregunta ${index + 1}`}
                            number_options={question.answers.length}
                            correctAnswer={tableResults[index].correctAnswer}
                            selectedAnswer={tableResults[index].selectedAnswer}
                            viewAnswerds={viewAnswerds}
                        />
                    ))
                }
            </article>
            <article className="sheetresults_total">
                <div className="sheetresults_resumen">
                    <h2>{totalAnswersCorrect.current} / {questions.length}</h2>
                </div>
                <div className="sheetresults_btn">
                    <button
                        className="btn"
                        onClick={() => setViewAnswerds(!viewAnswerds)}
                        disabled={!(totalQuestionsAnswered.current === questions.length)}
                        >
                        Verificar
                    </button>
                </div>
            </article>
        </section>
    )
}
