import { getButtonColor } from "../../components/QuizBoard/QuizOption/utils";

describe('Test getButtonColor', () => {
    it('Should return success color when option, optionClicked and painter are equal', () => {
        const color = getButtonColor({
            option: '1',
            optionClicked: '1',
            painter: '1',
        });
        expect(color).toBe('success');
    });
    it('Should return error color when option is equal to optionClicked but not to painter', () => {
        const color = getButtonColor({
            option: '1',
            optionClicked: '1',
            painter: '2',
        });
        expect(color).toBe('error');
    });
    it('Should return success color when option is equal to painter but not to optionClicked', () => {
        const color = getButtonColor({
            option: '1',
            optionClicked: '2',
            painter: '1',
        });
        expect(color).toBe('success');
    });
    it('Should return secondary color when optionClicked is falsy', () => {
        const color = getButtonColor({
            option: '1',
            optionClicked: '',
            painter: '1',
        });
        expect(color).toBe('secondary');
    });
    it('Should return secondary color when option is different than painter and optionClicked', () => {
        const color = getButtonColor({
            option: '1',
            optionClicked: '2',
            painter: '2',
        });
        expect(color).toBe('secondary');
    });
});

export {};