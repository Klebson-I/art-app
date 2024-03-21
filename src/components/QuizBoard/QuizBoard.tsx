import {  Button } from "@mui/material"
import { getQuestionSet } from "./utils"
import { useEffect, useState } from "react";
import { QuestionsAssignWithOptionsInterface, QuestionsAssignsWithOptionsListType } from "./types";
import './style.css';
import { QuizOption } from "./QuizOption/QuizOption";

interface Props {
    actualQuestionIndex: number;
    setActualQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const QuizBoard: React.FC<Props> = ({ actualQuestionIndex, setActualQuestionIndex }) => {
    const [quiz, setQuiz] = useState<QuestionsAssignsWithOptionsListType>([]);
    const [actualQuestion, setActualQuestion] = useState<QuestionsAssignWithOptionsInterface>();
    const [optionClicked, setOptionClicked] = useState<string>('');
    const [score, setScore] = useState<number>(0);

    const isNextQuestionButtonDisabled = !optionClicked;


    const incrementQuestion = () => {
        if (actualQuestionIndex < quiz.length - 1) {
            setActualQuestionIndex( prev => prev + 1);
        }
        setOptionClicked('');
    }

    useEffect(() => {
        const questionSet = getQuestionSet();
        setQuiz(questionSet);
    }, []);

    useEffect(() => {
        setActualQuestion(quiz[actualQuestionIndex]);
    }, [actualQuestionIndex, quiz]);

    const options = actualQuestion?.options.map((option) => (
        <QuizOption 
            option={option} 
            painter={actualQuestion.painter}
            optionClicked={optionClicked}
            setOptionClicked={setOptionClicked}
            setScore={setScore}
        />
    ));

    return <div className="gridContainer">
        <div className="imageGrid">
            <img src={actualQuestion?.image} alt="" className="questionImage"/>
        </div>
        <div className="answerGrid">
            {options}
            <Button 
                onClick={incrementQuestion} 
                variant='outlined' 
                sx={{marginTop: '1rem'}} 
                fullWidth
                disabled={isNextQuestionButtonDisabled}
            >
                Next Question
            </Button>
        </div>
    </div>
}