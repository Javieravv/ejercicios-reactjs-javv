import { useState } from "react"
import { Question, ResultsQuestions, StateQuiz } from "@/types/types-quizzjavv"
import Questions from "./Questions"
import Quizinicio from "./Quizinicio"
import { questions } from "@/data/questions"
import { ResultSheet } from "./ResultSheet"
import { shuffleAnswers } from "@/utils/utils"

const initTableResults = ():ResultsQuestions[] => {
    return Array.from({ length: 10 }, () => ({
        orderAnswers: [],
        selectedAnswer: -1,
        correctAnswer: -1
    }))
}

const Quizjavv = () => {
    const [stateQuiz, setStateQuiz] = useState<StateQuiz>("init")
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [questionText, setQuestionText] = useState<Question>(questions[currentQuestion])
    const [shuffledAnswers, setShuffledAnswers] = useState<number[]>(shuffleAnswers([0, 1, 2, 3]))
    const [tableResults, setTableResults] = useState<ResultsQuestions[]>( initTableResults() )
    // const [tableResults, setTableResults] = useState<ResultsQuestions[]>(() => 
    //     Array.from({ length: 10 }, () => ({
    //         orderAnswers: [],
    //         selectedAnswer: -1,
    //         correctAnswer: -1
    //     }))
    // );

    const handleIniciar = () => {
        // setQuestionText(questions[currentQuestion])
        setStateQuiz("in-course")
    }

    const handleTerminar = () => {
        setStateQuiz("end")
        setCurrentQuestion(0)
    } 

    const handleNextCurrentQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1)
            setQuestionText(() => questions[currentQuestion + 1])
            setShuffledAnswers(() => shuffleAnswers([0, 1, 2, 3]))
        }
    }

    const handlePrevCurrentQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion((prev) => prev - 1)
            setQuestionText(() => questions[currentQuestion - 1])
            setShuffledAnswers(() => shuffleAnswers([0, 1, 2, 3]))
        }
    }

    // Manejamos la respuesta que se dé a la pregunta
    const handleQuestionAnswer = (currentIndex: number): void => {
        let correctAnswer: number = -1
        shuffledAnswers.forEach((answer, index) => {
            if (questions[currentQuestion].answers[answer].is_correct) {
                correctAnswer = index
            }
        })

        setTableResults((prevResults) =>
            prevResults.map((result, index) =>
                index === currentQuestion
                    ? {
                        orderAnswers: shuffledAnswers,
                        selectedAnswer: currentIndex,
                        correctAnswer: correctAnswer
                    }
                    : result
            )
        );
    }

    console.table(tableResults)

    return (
        <section className="section-main">
            <h1>Quiz Javv 2025</h1>
            {stateQuiz === "init" && <Quizinicio handleIniciar={handleIniciar} />}
            {
                stateQuiz === "in-course" && <Questions
                    handleTerminar={handleTerminar}
                    handleNextCurrentQuestion={handleNextCurrentQuestion}
                    handlePrevCurrentQuestion={handlePrevCurrentQuestion}
                    currentQuestion={currentQuestion}
                    handleQuestionAnswer={handleQuestionAnswer}
                    questionTest={questionText}
                    shuffledAnswers={shuffledAnswers}
                />
            }
            {
                (stateQuiz === "in-course" || stateQuiz === "end") && <ResultSheet
                    questions={questions}
                    tableResults={tableResults}
                />
            }
        </section>
    )
}

export default Quizjavv