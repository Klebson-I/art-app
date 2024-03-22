import { useEffect, useState } from "react";
import { useGameState } from "../context/GameContext";

export const useGetGameCounter = () => {
    const [actualQuestionIndex, setActualQuestionIndex] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const {
        actualQuestionIndex: actualQuestionIndexFromState,
        score: scoreFromState,
    } = useGameState();

    useEffect(() => {
        if (actualQuestionIndexFromState) {
            setActualQuestionIndex(actualQuestionIndexFromState)
        }
    }, [actualQuestionIndexFromState]);

    useEffect(() => {
        if (scoreFromState) {
            setScore(scoreFromState);
        }
    }, [scoreFromState]);

    return {
        actualQuestionIndex,
        setActualQuestionIndex,
        score,
        setScore,
    };
}