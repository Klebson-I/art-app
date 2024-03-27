import { Button } from "@mui/material"
import React from "react";
import { NEXT_QUESTION_BUTTON } from "../testAccessors";

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
        data-testid={NEXT_QUESTION_BUTTON}
    >
        Next Question
    </Button>
}