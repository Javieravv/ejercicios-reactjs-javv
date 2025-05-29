import { CircleCheck, CircleX } from 'lucide-react';

interface CardSheetTesultsProps {
    text: string;
    number_options: number;
    selectedAnswer: number;
    correctAnswer: number;
    viewAnswerds: boolean;
}

export const Cardsheetresults = ({
    text,
    number_options,
    selectedAnswer,
    correctAnswer,
    viewAnswerds = false
}: CardSheetTesultsProps) => {
    return (
        <article className="card_sheetresult">
            <p className="text_cardsheet">{text}</p>
            <div className="options_textcardsheet">
                {
                    Array(number_options).fill('*').map(
                        (_, index) =>
                            <div
                                key={`Option${index}`}
                                className={`${(index === selectedAnswer) ? 'option_selected' : ''}`}
                            >
                                {String.fromCharCode(65 + index)}
                            </div>
                    )
                }
                {
                    (viewAnswerds ) && (
                        <div className="option_selected__checked">
                            {
                                selectedAnswer === correctAnswer && selectedAnswer > -1
                                    ? <CircleCheck size={20} color='green' />
                                    : correctAnswer > -1 ? <CircleX size={20} color='red' /> : ''
                            }
                        </div>
                    )
                }
            </div>
        </article>
    )
}
