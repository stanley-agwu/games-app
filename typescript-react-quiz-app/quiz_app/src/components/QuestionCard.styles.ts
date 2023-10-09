import styled from 'styled-components';

export const QuestionsWrapper = styled.div`
    max-width: 68.75rem;
    background: #ebfeff;
    border-radius: 0.625rem;
    border: 2px solid #0085a3;
    padding: 1.25rem;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;

    p {
        font-size: 1rem;
    }
`;


export type ButtonWrapperProps = {
    isCorrect: boolean;
    hasUserClicked: boolean;
}

export const QuestionButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        height: 2.5rem;
        margin: 0.3125rem 0;
        background: ${({ isCorrect, hasUserClicked }) =>
            isCorrect
            ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
            : !isCorrect && hasUserClicked
            ? 'linear-gradient(90deg, #ff5656, #c16868)'
            : 'linear-gradient(90deg, #56ccff, #6eafb4)'
        };
        border: 3px solid #fff;
        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius: 0.625rem;
        color: #fff;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    }
`;