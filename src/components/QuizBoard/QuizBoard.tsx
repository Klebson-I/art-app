import {  Button } from "@mui/material"
import './style.css';
import { QuizOption } from "./QuizOption/QuizOption";
import { useGameHandler } from "../../hooks/useGameHandler";

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

    const isNextQuestionButtonDisabled = !optionClicked;

    const incrementQuestion = () => {
        if (actualQuestionIndex < quiz.length - 1) {
            setActualQuestionIndex( prev => prev + 1);
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