import {  Button, Grid } from "@mui/material"
import { getQuestionSet } from "./utils"
import { useEffect, useState } from "react";
import { QuestionsAssignWithOptionsInterface, QuestionsAssignsWithOptionsListType } from "./types";
import './style.css';

export const QuizBoard = () => {
    const [quiz, setQuiz] = useState<QuestionsAssignsWithOptionsListType>([]);
    const [actualQuestionIndex, setActualQuestionIndex] = useState<number>(0);
    const [actualQuestion, setActualQuestion] = useState<QuestionsAssignWithOptionsInterface>();

    const incrementQuestion = () => {
        if (actualQuestionIndex < quiz.length - 1) {
            setActualQuestionIndex( prev => prev + 1);
        }
    }

    useEffect(() => {
        const questionSet = getQuestionSet();
        setQuiz(questionSet);
    }, []);

    useEffect(() => {
        setActualQuestion(quiz[actualQuestionIndex]);
    }, [actualQuestionIndex, quiz]);


    return <Grid container spacing={12} className="gridContainer">
        <Grid item spacing={12} className="imageGrid">
            <img src={actualQuestion?.image} alt="" className="questionImage"/>
        </Grid>
        <Grid item spacing={12} className="answerGrid">
            {
                actualQuestion?.options.map((option) => <p>{option}</p>)
            }
            <Button onClick={incrementQuestion} variant='outlined'>Next Question</Button>
        </Grid>
    </Grid>
}