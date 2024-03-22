import { useEffect, useState } from "react";
import { QuestionsAssignWithOptionsInterface, QuestionsAssignsWithOptionsListType } from "../components/QuizBoard/types";
import { getQuestionSet } from "../components/QuizBoard/utils";
import { useGameState, useGameStateDispatch } from "../context/GameContext";
import { setQuizGame } from "../context/GameContext/actions";

export const useGameHandler = (actualQuestionIndex: number) => {
    const [quiz, setQuiz] = useState<QuestionsAssignsWithOptionsListType>([]);
    const [actualQuestion, setActualQuestion] = useState<QuestionsAssignWithOptionsInterface>();
    const [optionClicked, setOptionClicked] = useState<string>('');
    const [wasGameSet, setWasGameSet] = useState<Boolean>(false);
    const {
        game,
    } = useGameState();
    const dispatchGameState = useGameStateDispatch();

    useEffect(() => {
        if (wasGameSet) {
            return;
        }
        if (game.length) {
            setQuiz(game);
            return;
        }
        const questionSet = getQuestionSet();
        setQuiz(questionSet);
        dispatchGameState(
            setQuizGame(questionSet),
        );
        setWasGameSet(true);
    }, [dispatchGameState, game, wasGameSet]);

    useEffect(() => {
        setActualQuestion(quiz[actualQuestionIndex]);
    }, [actualQuestionIndex, quiz]);

    return {
        actualQuestion,
        optionClicked,
        setOptionClicked,
        quiz,
        setWasGameSet,
    }
}