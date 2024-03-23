import { render, screen } from "@testing-library/react";
import { EndGameButtons } from "../components/EndGameButtons/EndGameButtons";
import { BACK_TO_MAIN_BUTTON, START_AGAIN_BUTTON } from "../components/testAccessors";
import userEvent from "@testing-library/user-event";

const mockSetWasGameSet = jest.fn();
const mockSetWasScoreSet = jest.fn();
const mockSetWasIndexSet = jest.fn();
const mockSetOptionClicked = jest.fn();
const mockDispatchGameState = jest.fn();
const mockedUsedNavigate = jest.fn();
let mockIndex = 1;

jest.mock('react-router', () => ({
   ...jest.requireActual('react-router') as any,
  useNavigate: () => mockedUsedNavigate,
}));


const renderButtons = () => {
    const { container } = render(
        <EndGameButtons 
            setOptionClicked={mockSetOptionClicked}
            setWasGameSet={mockSetWasGameSet}
            setWasIndexSet={mockSetWasIndexSet}
            setWasScoreSet={mockSetWasScoreSet}
        />
    );
    return container;
}

jest.mock('../context/GameContext', () => ({
    useGameStateDispatch: () => mockDispatchGameState,
    useGameState: () => ({
        actualQuestionIndex: mockIndex,
    }),
}));

describe('Test EndGameButtons', () => {
    it('Should render 2 buttons', () => {
        renderButtons();
        const startAgainButton = screen.getByTestId(START_AGAIN_BUTTON);
        const backToMainButton = screen.getByTestId(BACK_TO_MAIN_BUTTON);
        expect(startAgainButton).toBeInTheDocument();
        expect(backToMainButton).toBeInTheDocument();
    });
    it('Should call reset callbacks when start again button is clicked', () => {
        renderButtons();
        const startAgainButton = screen.getByTestId(START_AGAIN_BUTTON);
        userEvent.click(startAgainButton);
        expect(mockDispatchGameState).toHaveBeenCalled();
        expect(mockSetOptionClicked).toHaveBeenCalled();
        expect(mockSetWasGameSet).toHaveBeenCalled();
        expect(mockSetWasIndexSet).toHaveBeenCalled();
        expect(mockSetWasScoreSet).toHaveBeenCalled();
    });
    it('Should call reset context callback function when back to main button is clicked and actualIndex is not 9', () => {
        renderButtons();
        const backToMainButton = screen.getByTestId(BACK_TO_MAIN_BUTTON);
        userEvent.click(backToMainButton);
        expect(mockedUsedNavigate).toHaveBeenCalled();
        expect(mockDispatchGameState).not.toHaveBeenCalled();
    });
    it('Should call reset context callback function and reset dispatch when back to main button is clicked and actualIndex is 9', () => {
        mockIndex = 9;
        renderButtons();
        const backToMainButton = screen.getByTestId(BACK_TO_MAIN_BUTTON);
        userEvent.click(backToMainButton);
        expect(mockedUsedNavigate).toHaveBeenCalled();
        expect(mockDispatchGameState).toHaveBeenCalled();
    });
});

export {};