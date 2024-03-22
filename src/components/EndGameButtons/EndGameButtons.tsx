import { Box, Button } from "@mui/material";
import './style.css';
import { useNavigate } from "react-router";
import { useGameStateDispatch } from "../../context/GameContext";
import { resetQuizGame } from "../../context/GameContext/actions";
import React from "react";

interface Props {
    setWasGameSet:  React.Dispatch<React.SetStateAction<Boolean>>;
}

export const EndGameButtons: React.FC<Props> = ({ setWasGameSet }) => {
    const navigate = useNavigate();
    const dispatchGameState = useGameStateDispatch();

    const goBackToMain = () => navigate('/');

    const startNewGame = () => {
        dispatchGameState(
            resetQuizGame(),
        );
        setWasGameSet(false);
    }

    return <Box className='buttonsBox'>
        <Button variant="outlined" fullWidth onClick={startNewGame}>
            START AGAIN
        </Button>
        <Button variant="outlined" fullWidth onClick={goBackToMain}>
            BACK TO MAIN
        </Button>
    </Box>
};