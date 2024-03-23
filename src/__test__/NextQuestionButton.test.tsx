import { render, screen } from "@testing-library/react";
import { NextQuestionButton } from "../components/NextQuestionButton/NextQuestionButton";
import { NEXT_QUESTION_BUTTON } from "../components/testAccessors";
import userEvent from "@testing-library/user-event";

const mockAction = jest.fn();

const renderButton = (isDisabled: boolean | undefined) => {
    const { container } = render(
        <NextQuestionButton 
            action={mockAction}
            isDisabled={isDisabled}
        />
    );
    return container;
}

describe('Test NextQuestionButton', () => {
    it('Should call action callback from props when is clicked', () => {
        renderButton(false);
        const button = screen.getByTestId(NEXT_QUESTION_BUTTON);
        userEvent.click(button);
        expect(mockAction).toHaveBeenCalled();
    });
    it('Should be enabled when isDisabled given in props is false', () => {
        renderButton(false);
        const button = screen.getByTestId(NEXT_QUESTION_BUTTON);
        expect(button).not.toBeDisabled();
    });
    it('Should be disabled when isDisabled given in props is true', () => {
        renderButton(true);
        const button = screen.getByTestId(NEXT_QUESTION_BUTTON);
        expect(button).toBeDisabled();
    });
});

export {};