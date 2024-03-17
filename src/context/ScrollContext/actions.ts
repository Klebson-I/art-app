export const ADD_SECTION_REF = 'add-section-ref';
export const ADD_QUIZ_REF = 'add-quiz-ref';

export const setSectionRef = (payload: any) => ({
    action: ADD_SECTION_REF,
    payload,
});

export const setQuizRef = (payload: any) => ({
    action: ADD_QUIZ_REF,
    payload,
});