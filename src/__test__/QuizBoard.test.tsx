import { render, screen, waitFor } from "@testing-library/react";
import { QuizBoard } from "../components/QuizBoard/QuizBoard";
import { BACK_TO_MAIN_BUTTON, NEXT_QUESTION_BUTTON, QUIZ_OPTION_BUTTON, START_AGAIN_BUTTON } from "../components/testAccessors";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router', () => ({
   ...jest.requireActual('react-router') as any,
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock('../context/GameContext', () => ({
    useGameStateDispatch: () => jest.fn(),
    useGameState: () => ({
        game: [],
    })
}))

const mockSetScore = jest.fn();

const renderQuizBoard = (actualIndex: number) => {
    const { container } = render(
        <QuizBoard 
            setActualQuestionIndex={() => {}}
            actualQuestionIndex={actualIndex}
            setScore={mockSetScore}
            setWasIndexSet={() => {}}
            setWasScoreSet={() => {}}
        />
    );
    return container;
};

describe('Test QuizBoard', () => {
    it('Should render 4 option buttons at once', () => {
        renderQuizBoard(0);
        const options = screen.getAllByTestId(QUIZ_OPTION_BUTTON);
        expect(options).toHaveLength(4);
    });
    it('Should render NextQuestionButton when actual index in not 9', () => {
        renderQuizBoard(0);
        const nextQuestionButton = screen.getByTestId(NEXT_QUESTION_BUTTON);
        expect(nextQuestionButton).toBeInTheDocument();
    });
    it('Should render EndGameButtons when actual index in 9 and optionClicked is not falsey', async () => {
        renderQuizBoard(9);
        const options = screen.getAllByTestId(QUIZ_OPTION_BUTTON);
        userEvent.click(options[0]);
        await waitFor(() => { 
            const startAgainButton = screen.getByTestId(START_AGAIN_BUTTON);
            expect(startAgainButton).toBeInTheDocument();
        });
        await waitFor(() => { 
            const goBackToMainButton = screen.getByTestId(BACK_TO_MAIN_BUTTON);
            expect(goBackToMainButton).toBeInTheDocument();
        });
    });
})