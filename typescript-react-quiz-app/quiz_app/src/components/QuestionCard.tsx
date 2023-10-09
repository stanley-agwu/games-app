import React from 'react';
import { Props } from '../types';
import { QuestionsWrapper, QuestionButtonWrapper } from './QuestionCard.styles';

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