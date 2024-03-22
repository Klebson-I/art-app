import { Box } from "@mui/material";
import './style.css'

interface Props {
    actualQuestionIndex: number;
    score: number;
}

export const RoundIndicator: React.FC<Props> = ({ actualQuestionIndex, score }) => {
    return <Box className="roundBox">
        <h1 className="roundInfo"> Question {actualQuestionIndex + 1} / 10</h1>
        <h2 className="scoreInfo">Score: {score}</h2>
    </Box>
};