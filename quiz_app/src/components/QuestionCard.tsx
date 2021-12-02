import React from 'react';
import { AnswerObject } from '../App';
import { QuestionsWrapper, QuestionButtonWrapper } from './QuestionCard.styles';


type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({question,
                                        answers,
                                        callback,
                                        userAnswer,
                                        questionNr,
                                        totalQuestions}) => (
        (
            <QuestionsWrapper>
                <div>
                    <p className='number'>
                        Question: {questionNr} / {totalQuestions}
                    </p>
                    <p dangerouslySetInnerHTML={{ __html: question }} />
                    <div>
                        {answers.map(answer => (
                        <QuestionButtonWrapper 
                            key={answer}
                            isCorrect={userAnswer?.correctAnswer === answer}
                            hasUserClicked={userAnswer?.answer === answer}
                        >
                            <button disabled={!!userAnswer} value={answer} onClick={callback}>
                                <span dangerouslySetInnerHTML={{ __html: answer }} />
                            </button>
                        </QuestionButtonWrapper>
                        ))}
                    </div>
                </div>
            </QuestionsWrapper>
        )
    );

export default QuestionCard;