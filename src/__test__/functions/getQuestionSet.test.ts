import { getQuestionSet } from "../../components/QuizBoard/utils";

describe('Test getQuestionSet', () => {
    it('Should return array of questions with 10 length', () => {
        const result = getQuestionSet();
        expect(result).toHaveLength(10);
    })
});

export {};