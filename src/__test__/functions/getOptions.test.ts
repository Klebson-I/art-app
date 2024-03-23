import { PAINTERS } from "../../components/QuizBoard/consts";
import { getOptions } from "../../components/QuizBoard/utils";

describe('Test getOptions', () => {
    it('Should return array of 3 painters from PAINTERS const, excluding given string from arg', () => {
        const PAINTER = PAINTERS[0];
        const result = getOptions(PAINTER);
        const painterOccurance = result.filter((painter) => painter === PAINTER);
        expect(painterOccurance).toHaveLength(0);
        expect(result).toHaveLength(3);
    });
});

export {};