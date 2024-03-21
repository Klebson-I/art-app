import { GetButtonColorInput, IsButtonSelectedAsCorrectAnswerInput, colorType } from "./types";

const isButtonCorrectAnswer = (option: string, painter: string) => option === painter;

const isButtonSelectedAsCorrectAnswer = ({
    option,
    painter,
    optionClicked,
}: IsButtonSelectedAsCorrectAnswerInput) => option === painter && painter === optionClicked;

const isButtonClicked = (optionClicked: string, option: string) => optionClicked === option;

export const getButtonColor = ({
    option,
    optionClicked,
    painter,
}: GetButtonColorInput): colorType => {
    if (!optionClicked) {
        return 'secondary';
    }
    if (isButtonClicked(option, optionClicked)) {
        if (option === painter) {
            return 'success';
        }
        return 'error';
    }
    if (isButtonCorrectAnswer(option, painter)) {
        return 'success';
    }
    return 'secondary';
};

