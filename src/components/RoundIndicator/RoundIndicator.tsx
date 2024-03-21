import { Box } from "@mui/material";
import './style.css'

interface Props {
    actualQuestionIndex: number;
}

export const RoundIndicator: React.FC<Props> = ({ actualQuestionIndex }) => {
    return <Box className="roundBox">
        <h1 className="roundInfo"> Question {actualQuestionIndex + 1} / 10</h1>
    </Box>
};