import { Box } from "@mui/material"
import './style.css';
import { RoundIndicator } from "../../components/RoundIndicator/RoundIndicator";
import { QuizBoard } from "../../components/QuizBoard/QuizBoard";

export const Quiz = () => {
    return <Box className="quizPage">
        <RoundIndicator />
        <QuizBoard />
    </Box>
}