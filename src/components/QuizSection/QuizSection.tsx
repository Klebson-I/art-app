import { Box } from "@mui/material"
import './style.css';
import { useEffect, useRef } from "react";
import { useScrollDispatch } from "../../context/ScrollContext";
import { setQuizRef } from "../../context/ScrollContext/actions";

export const QuizSection: React.FC<{}> = () => {
    const dispatchScroll = useScrollDispatch();
    const ref = useRef<Element|null>(null);
    useEffect(() => {
        dispatchScroll(
            setQuizRef(ref),
        );
    }, [ref, dispatchScroll])

    return <Box className="quizSectionContainer" ref={ref}>
        <h1 className="quizSectionHeader">Already have some knowledge? Let's check it</h1>
        <p className="quizSectionInfo">Take a challange in Quiz - indicate a painter that artwork is assign to</p>
    </Box>
}