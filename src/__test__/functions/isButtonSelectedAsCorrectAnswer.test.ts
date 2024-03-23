import { isButtonSelectedAsCorrectAnswer } from "../../components/QuizBoard/QuizOption/utils";

describe('Test isButtonSelectedAsCorrectAnswer', () => {
    it('Should return true when option is equal to painter and to optionClicked', () => {
        const result = isButtonSelectedAsCorrectAnswer({
            option: '1',
            optionClicked: '1',
            painter: '1',
        });
        expect(result).toBe(true);
    });
    it('Should return false when option is not equal to painter and to optionClicked', () => {
        const result = isButtonSelectedAsCorrectAnswer({
            option: '1',
            optionClicked: '2',
            painter: '1',
        });
        expect(result).toBe(false);
    });
})

export {};