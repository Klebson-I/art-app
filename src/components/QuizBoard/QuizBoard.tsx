import {  Button } from "@mui/material"
import './style.css';
import { QuizOption } from "./QuizOption/QuizOption";
import { useGameHandler } from "../../hooks/useGameHandler";
import { useGameStateDispatch } from "../../context/GameContext";
import { updateQuestionIndex } from "../../context/GameContext/actions";

interface Props {
    actualQuestionIndex: number;
    setActualQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
    setScore: React.Dispatch<React.SetStateAction<number>>;
}

export const QuizBoard: React.FC<Props> = ({ actualQuestionIndex, setActualQuestionIndex, setScore }) => {
    const {
        actualQuestion,
        optionClicked,
        setOptionClicked,
        quiz,
    } = useGameHandler(actualQuestionIndex);

    const dispatchGameState = useGameStateDispatch();

    const isNextQuestionButtonDisabled = !optionClicked;

    const incrementQuestion = () => {
        if (actualQuestionIndex < quiz.length - 1) {
            let index = 0;
            setActualQuestionIndex( prev => {
                index = prev + 1;
                return index;
            });
            dispatchGameState(
                updateQuestionIndex(index),
            );
        }
        setOptionClicked('');
    }

    const options = actualQuestion?.options.map((option) => (
        <QuizOption 
            option={option} 
            painter={actualQuestion.painter}
            optionClicked={optionClicked}
            setOptionClicked={setOptionClicked}
            setScore={setScore}
        />
    ));

    return <div className="gridContainer">
        <div className="imageGrid">
            <img src={actualQuestion?.image} alt="" className="questionImage"/>
        </div>
        <div className="answerGrid">
            {options}
            <Button 
                onClick={incrementQuestion} 
                variant='outlined' 
                sx={{marginTop: '1rem'}} 
                fullWidth
                disabled={isNextQuestionButtonDisabled}
            >
                Next Question
            </Button>
        </div>
    </div>
}