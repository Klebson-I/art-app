import { Box, Button } from "@mui/material";
import './style.css';
import { useNavigate } from "react-router";
import { useGameState, useGameStateDispatch } from "../../context/GameContext";
import { resetQuizGame } from "../../context/GameContext/actions";
import React from "react";
import { BACK_TO_MAIN_BUTTON, START_AGAIN_BUTTON } from "../testAccessors";

interface Props {
    setWasGameSet:  React.Dispatch<React.SetStateAction<Boolean>>;
    setWasIndexSet:React.Dispatch<React.SetStateAction<Boolean>>;
    setWasScoreSet:React.Dispatch<React.SetStateAction<Boolean>>;
    setOptionClicked:React.Dispatch<React.SetStateAction<string>>;
}

export const EndGameButtons: React.FC<Props> = ({ setWasGameSet, setWasScoreSet, setWasIndexSet, setOptionClicked }) => {
    const navigate = useNavigate();
    const dispatchGameState = useGameStateDispatch();
    const {
        actualQuestionIndex
    } = useGameState();

    const goBackToMain = () => {
        if (actualQuestionIndex === 9) {
            dispatchGameState(
                resetQuizGame(),
            );
        }
        navigate('/');
    };

    const startNewGame = () => {
        dispatchGameState(
            resetQuizGame(),
        );
        setWasGameSet(false);
        setWasIndexSet(false);
        setWasScoreSet(false);
        setOptionClicked('');
    }

    return <Box className='buttonsBox'>
        <Button variant="outlined" fullWidth onClick={startNewGame} data-testid={START_AGAIN_BUTTON}>
            START AGAIN
        </Button>
        <Button variant="outlined" fullWidth onClick={goBackToMain} data-testid={BACK_TO_MAIN_BUTTON}>
            BACK TO MAIN
        </Button>
    </Box>
};