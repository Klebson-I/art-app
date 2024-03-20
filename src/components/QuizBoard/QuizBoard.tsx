import {  Button, Grid } from "@mui/material"
import { getQuestionSet } from "./utils"
import { useEffect, useState } from "react";
import { QuestionsAssignWithOptionsInterface, QuestionsAssignsWithOptionsListType } from "./types";

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


    return <Grid container spacing={12}>
        <Grid item spacing={6}>
            <img src={actualQuestion?.image} alt="" style={{ width: '300px', height: 'auto'}}/>
        </Grid>
        <Grid item spacing={6}>
            {
                actualQuestion?.options.map((option) => <p>{option}</p>)
            }
        </Grid>
        <Button onClick={incrementQuestion} variant='outlined'>Next Question</Button>
    </Grid>
}