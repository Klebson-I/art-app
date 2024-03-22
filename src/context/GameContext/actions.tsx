import { QuestionsAssignsWithOptionsListType } from "../../components/QuizBoard/types";

export const SET_QUIZ = 'set quiz';
export const UPDATE_QUESTION_INDEX = 'update question index';
export const UPDATE_SCORE = 'update score';
export const RESET_GAME = 'reset game';

export const setQuizGame = (payload: QuestionsAssignsWithOptionsListType) => ({
    action: SET_QUIZ,
    payload,
});

export const updateQuestionIndex = (payload: number) => ({
    action: UPDATE_QUESTION_INDEX,
    payload,
});

export const updateScore = (payload: number) => ({
    action: UPDATE_SCORE,
    payload,
});

export const resetQuizGame = () => ({
    action: RESET_GAME,
    payload: undefined,
});