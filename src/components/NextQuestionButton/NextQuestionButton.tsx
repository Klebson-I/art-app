import { Button } from "@mui/material"
import React from "react";

interface Props {
    isDisabled: boolean | undefined;
    action: () => void;
};

export const NextQuestionButton: React.FC<Props> = ({ isDisabled, action }) => {
    return <Button
        onClick={action} 
        variant='outlined' 
        sx={{marginTop: '1rem'}} 
        fullWidth
        disabled={isDisabled}
    >
        Next Question
    </Button>
}