import { getMixedArray } from "../../components/QuizBoard/utils"

describe('Test getMixedArray', () => {
    it('Should return array with the same elements but in different order when array is given', () => {
        const array = [1,2,3,4,5];
        const result = getMixedArray(array);
        expect(array).toEqual(expect.arrayContaining(result));
        const isAllInTheSameOrder = array.every((element, index) => element === result[index]);
        expect(isAllInTheSameOrder).toBe(false);
    })
})