import { Button } from "@mui/material"
import { getButtonColor, isButtonSelectedAsCorrectAnswer } from "./utils";
import { useEffect } from "react";

interface Props {
    option: string;
    painter: string;
    optionClicked: string;
    setOptionClicked: React.Dispatch<React.SetStateAction<string>>;
    setScore: React.Dispatch<React.SetStateAction<number>>;
}

export const QuizOption: React.FC<Props> = ({ option, painter, optionClicked, setOptionClicked, setScore }) => {

    const buttonColor = getButtonColor({
        option,
        optionClicked,
        painter,
    });

    const handleOnClick = () => {
        if (optionClicked) {
            return;
        }
        setOptionClicked(option);
    };

    useEffect(() => {
        const isCorrectAnswer = isButtonSelectedAsCorrectAnswer({
            option,
            optionClicked,
            painter,
        });
        if (isCorrectAnswer) {
            setScore(prev => prev + 1);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [optionClicked, setScore]);

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