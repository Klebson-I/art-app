import { Button } from "@mui/material"
import { useEffect, useState } from "react";
import { getButtonColor } from "./utils";

interface Props {
    option: string;
    painter: string;
    optionClicked: string;
    setOptionClicked: React.Dispatch<React.SetStateAction<string>>;
}

export const QuizOption: React.FC<Props> = ({ option, painter, optionClicked, setOptionClicked }) => {

    const buttonColor = getButtonColor({
        option,
        optionClicked,
        painter,
    });

    const handleOnClick = () => !optionClicked && setOptionClicked(option);

    return <Button 
        variant="outlined" 
        color={buttonColor}
        fullWidth
        size="large"
        sx={{margin: '0.2rem'}}
        onClick={handleOnClick}
    >
        {option}
    </Button>
}