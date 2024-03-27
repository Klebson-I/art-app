import { useEffect, useState } from "react";
import { useGameState, useGameStateDispatch } from "../context/GameContext";
import { updateQuestionIndex, updateScore } from "../context/GameContext/actions";

export const useGetGameCounter = () => {
    const [actualQuestionIndex, setActualQuestionIndex] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [wasScoreSet, setWasScoreSet] = useState<Boolean>(false);
    const [wasIndexSet, setWasIndexSet] = useState<Boolean>(false);
    const {
        actualQuestionIndex: actualQuestionIndexFromState,
        score: scoreFromState,
    } = useGameState();
    const dispatchGameState = useGameStateDispatch();

    useEffect(() => {
        if (wasIndexSet) {
            return;
        }
        if (actualQuestionIndexFromState !== null) {
            setActualQuestionIndex(actualQuestionIndexFromState)
            return;
        }
        setActualQuestionIndex(0);
        dispatchGameState(
            updateQuestionIndex(0)
        )
        setWasIndexSet(true);
    }, [actualQuestionIndexFromState, dispatchGameState, wasIndexSet]);

    useEffect(() => {
        if (wasScoreSet) {
            return;
        }
        if (scoreFromState !== null) {
            setScore(scoreFromState);
            return;
        }
        setScore(0);
        dispatchGameState(
            updateScore(0)
        )
        setWasScoreSet(true);
    }, [scoreFromState, wasScoreSet, dispatchGameState]);

    return {
        actualQuestionIndex,
        setActualQuestionIndex,
        score,
        setScore,
        setWasIndexSet,
        setWasScoreSet,
    };
}