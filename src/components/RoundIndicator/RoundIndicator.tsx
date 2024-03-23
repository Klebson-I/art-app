import { Box } from "@mui/material";
import './style.css'
import { INDEX_INDICATOR, SCORE_INDICATOR } from "../testAccessors";

interface Props {
    actualQuestionIndex: number;
    score: number;
}

export const RoundIndicator: React.FC<Props> = ({ actualQuestionIndex, score }) => {
    return <Box className="roundBox">
        <h1 className="roundInfo" data-testid={INDEX_INDICATOR}> Question {actualQuestionIndex + 1} / 10</h1>
        <h2 className="scoreInfo" data-testid={SCORE_INDICATOR}>Score: {score}</h2>
    </Box>
};