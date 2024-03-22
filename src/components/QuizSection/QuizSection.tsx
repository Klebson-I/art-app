import { Box, Button } from "@mui/material"
import './style.css';
import { useEffect, useRef } from "react";
import { useScrollDispatch } from "../../context/ScrollContext";
import { setQuizRef } from "../../context/ScrollContext/actions";
import { useNavigate } from "react-router-dom";
import { useIsGamePending } from "../../hooks/useIsGamePending";
import { getButtonText } from "./utils";

export const QuizSection: React.FC<{}> = () => {
    const dispatchScroll = useScrollDispatch();
    const navigate = useNavigate();
    const ref = useRef<Element|null>(null);
    const isGamePending = useIsGamePending();

    useEffect(() => {
        dispatchScroll(
            setQuizRef(ref),
        );
    }, [ref, dispatchScroll])

    const buttonText = getButtonText(isGamePending);

    return <Box className="quizSectionContainer" ref={ref}>
        <h1 className="quizSectionHeader">Already have some knowledge? Let's check it</h1>
        <p className="quizSectionInfo">Take a challange in Quiz - indicate a painter that artwork is assign to</p>
        <Button variant="outlined" onClick={() => navigate('/quiz')} sx={{ marginTop: '2rem'}}>{buttonText}</Button>
    </Box>
}