import { PAINTERS, QUESTION_ASSIGNS } from "./consts";
import { QuestionsAssignWithOptionsInterface, QuestionsAssignsListType, QuestionsAssignsWithOptionsListType } from "./types";

const getMixedArray = (arr: any[]) => {
    const arrayCopy = [...arr];
    const mixedArray = [];
    for (let i = 0; i < arr.length; i++) {
        const randomNumberInScope = Math.floor(Math.random() * arrayCopy.length);
        mixedArray.push(arrayCopy[randomNumberInScope]);
        arrayCopy.splice(randomNumberInScope, 1);
    }
    return mixedArray;
}

const getOptions = (toExclude: string) => {
    const OPTIONS_COUNT = 3;
    const optionsWithoutExcluded = PAINTERS.filter((painter) => painter !== toExclude);
    const selectedOptions = [];
    for (let i = 0; i < OPTIONS_COUNT; i++) {
        const randomNumberInScope = Math.floor(Math.random() * optionsWithoutExcluded.length);
        selectedOptions.push(optionsWithoutExcluded[randomNumberInScope]);
        optionsWithoutExcluded.splice(randomNumberInScope, 1);
    }
    return selectedOptions;
}

const getQuestionsWithOptions = (questions: QuestionsAssignsListType): QuestionsAssignsWithOptionsListType => {
    const questionsWithOptions = questions.reduce((acc: QuestionsAssignsWithOptionsListType, curr) => {
        const { painter } = curr;
        const options = getOptions(painter);
        const mixedOptions = getMixedArray([...options, painter]);
        const withOptions: QuestionsAssignWithOptionsInterface = {
            ...curr,
            options: mixedOptions,
        };
        acc.push(withOptions);
        return acc;
    }, []);
    return questionsWithOptions;
}

export const getQuestionSet = () => {
    const assignQuestionsMixed = getMixedArray(QUESTION_ASSIGNS) as QuestionsAssignsListType;
    const assignQuestionsWithOptions = getQuestionsWithOptions(assignQuestionsMixed);
    return assignQuestionsWithOptions;
};