import { SET_QUIZ, UPDATE_QUESTION_INDEX, UPDATE_SCORE } from "./actions";
import { GameStateInterface, GameStateAction } from "./types";

export const reducer = (state: GameStateInterface, { action, payload }: GameStateAction) => {
    switch(action) {
        case SET_QUIZ: {
            return {
                ...state,
                game: payload,
            }
        }
        case UPDATE_QUESTION_INDEX: {
            return {
                ...state,
                actualQuestionIndex: payload,
            }
        }
        case UPDATE_SCORE: {
            return {
                ...state,
                score: payload,
            }
        }
        default: return state;
    }
}