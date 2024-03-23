import { render, screen } from "@testing-library/react";
import { QuizOption } from "../components/QuizBoard/QuizOption/QuizOption";
import { QUIZ_OPTION_BUTTON } from "../components/testAccessors";
import userEvent from "@testing-library/user-event";

const mockDispatchGameState = jest.fn();
const mockSetOptionClicked = jest.fn();
const mockSetScore = jest.fn();

jest.mock('../context/GameContext', () => ({
    useGameStateDispatch: () => mockDispatchGameState,
}));

const renderOption = ({
    option,
    optionClicked,
    painter,
    setOptionClicked,
    setScore,
}: {
    option: string;
    optionClicked: string;
    painter: string;
    setOptionClicked: () => void;
    setScore: () =>void;
}) => {
    const { container } = render(
        <QuizOption 
            option={option}
            optionClicked={optionClicked}
            painter={painter}
            setOptionClicked={setOptionClicked}
            setScore={setScore}
        />
    );
    return container;
}

describe('Test QuizOption', () => {
    it('Should render button with text from option props when its given', () => {
        renderOption({
            option: 'Tiepolo',
            optionClicked: '',
            painter: 'Tiepolo',
            setOptionClicked: () => {},
            setScore: () => {},
        });
        const button = screen.getByTestId(QUIZ_OPTION_BUTTON);
        expect(button).toHaveTextContent('Tiepolo');
    });
    it('Should call setOptionClicked callback when is clicked and optionClicked is falsey', () => {
        renderOption({
            option: 'Tiepolo',
            optionClicked: '',
            painter: 'Tiepolo',
            setOptionClicked: mockSetOptionClicked,
            setScore: () => {},
        });
        const button = screen.getByTestId(QUIZ_OPTION_BUTTON);
        userEvent.click(button);
        expect(mockSetOptionClicked).toHaveBeenCalled();
    });
    it('Should not call setOptionClicked callback when is clicked and optionClicked is not falsey', () => {
        renderOption({
            option: 'Tiepolo',
            optionClicked: '1',
            painter: 'Tiepolo',
            setOptionClicked: mockSetOptionClicked,
            setScore: () => {},
        });
        const button = screen.getByTestId(QUIZ_OPTION_BUTTON);
        userEvent.click(button);
        expect(mockSetOptionClicked).not.toHaveBeenCalled();
    });
    it('Should call dispatchGameState and setScore callback when option, optionClicked and painter given in props are equal', () => {
        renderOption({
            option: 'Tiepolo',
            optionClicked: 'Tiepolo',
            painter: 'Tiepolo',
            setOptionClicked: mockSetOptionClicked,
            setScore: mockSetScore,
        });
        expect(mockSetScore).toHaveBeenCalled();
        expect(mockDispatchGameState).toHaveBeenCalled();
    });
});

export {};