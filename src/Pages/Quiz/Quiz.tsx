import { Box } from "@mui/material"
import './style.css';
import { RoundIndicator } from "../../components/RoundIndicator/RoundIndicator";
import { QuizBoard } from "../../components/QuizBoard/QuizBoard";
import { useGetGameCounter } from "../../hooks/useGetGameCounters";

export const Quiz = () => {
    const {
        actualQuestionIndex,
        score,
        setActualQuestionIndex,
        setScore,
    } = useGetGameCounter();
    
    return <Box className="quizPage">
        <RoundIndicator actualQuestionIndex={actualQuestionIndex} score={score}/>
        <QuizBoard 
            actualQuestionIndex={actualQuestionIndex} 
            setActualQuestionIndex={setActualQuestionIndex}
            setScore={setScore}
        />
    </Box>
}