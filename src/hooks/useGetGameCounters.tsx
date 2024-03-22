import { useState } from "react";

export const useGetGameCounter = () => {
    const [actualQuestionIndex, setActualQuestionIndex] = useState<number>(0);
    const [score, setScore] = useState<number>(0);

    return {
        actualQuestionIndex,
        setActualQuestionIndex,
        score,
        setScore,
    };
}