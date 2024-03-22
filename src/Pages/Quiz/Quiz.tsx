import { Box } from "@mui/material"
import './style.css';
import { RoundIndicator } from "../../components/RoundIndicator/RoundIndicator";
import { QuizBoard } from "../../components/QuizBoard/QuizBoard";
import { useState } from "react";

export const Quiz = () => {
    const [actualQuestionIndex, setActualQuestionIndex] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    return <Box className="quizPage">
        <RoundIndicator actualQuestionIndex={actualQuestionIndex} score={score}/>
        <QuizBoard 
            actualQuestionIndex={actualQuestionIndex} 
            setActualQuestionIndex={setActualQuestionIndex}
            score={score}
            setScore={setScore}
        />
    </Box>
}