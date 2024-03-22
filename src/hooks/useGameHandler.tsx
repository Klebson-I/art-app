import { useEffect, useState } from "react";
import { QuestionsAssignWithOptionsInterface, QuestionsAssignsWithOptionsListType } from "../components/QuizBoard/types";
import { getQuestionSet } from "../components/QuizBoard/utils";

export const useGameHandler = (actualQuestionIndex: number) => {
    const [quiz, setQuiz] = useState<QuestionsAssignsWithOptionsListType>([]);
    const [actualQuestion, setActualQuestion] = useState<QuestionsAssignWithOptionsInterface>();
    const [optionClicked, setOptionClicked] = useState<string>('');

    useEffect(() => {
        const questionSet = getQuestionSet();
        setQuiz(questionSet);
    }, []);

    useEffect(() => {
        setActualQuestion(quiz[actualQuestionIndex]);
    }, [actualQuestionIndex, quiz]);

    return {
        actualQuestion,
        optionClicked,
        setOptionClicked,
        quiz,
    }
}