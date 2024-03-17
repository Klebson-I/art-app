import { ADD_QUIZ_REF, ADD_SECTION_REF } from "./actions";
import { ScrollStateInterface, ScrollStateAction } from "./types";

export const reducer = (state: ScrollStateInterface, { action, payload }: ScrollStateAction) => {
    switch(action) {
        case ADD_SECTION_REF: {
            return {
                ...state,
                artistSectionRef: payload,
            }
        }
        case ADD_QUIZ_REF: {
            return {
                ...state,
                goToQuizRef: payload,
            }
        }
        default: return state;
    }
}