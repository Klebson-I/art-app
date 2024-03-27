import './style.css';
import { QuizOption } from "./QuizOption/QuizOption";
import { useGameHandler } from "../../hooks/useGameHandler";
import { useGameStateDispatch } from "../../context/GameContext";
import { updateQuestionIndex } from "../../context/GameContext/actions";
import { NextQuestionButton } from "../NextQuestionButton/NextQuestionButton";
import { EndGameButtons } from "../EndGameButtons/EndGameButtons";
import { LAST_QUIZ_INDEX } from '../constants';

interface Props {
    actualQuestionIndex: number;
    setActualQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    setWasIndexSet:React.Dispatch<React.SetStateAction<Boolean>>,
    setWasScoreSet:React.Dispatch<React.SetStateAction<Boolean>>,
}

export const QuizBoard: React.FC<Props> = ({ actualQuestionIndex, setActualQuestionIndex, setScore, setWasIndexSet, setWasScoreSet }) => {
    const {
        actualQuestion,
        optionClicked,
        setOptionClicked,
        quiz,
        setWasGameSet,
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
    
    const buttonSection = actualQuestionIndex === LAST_QUIZ_INDEX && optionClicked
        ? <EndGameButtons 
            setWasGameSet={setWasGameSet}
            setWasIndexSet={setWasIndexSet}
            setWasScoreSet={setWasScoreSet}
            setOptionClicked={setOptionClicked}
        />
        : <NextQuestionButton 
            action={incrementQuestion}
            isDisabled={isNextQuestionButtonDisabled}
        />

    return <div className="gridContainer">
        <div className="imageGrid">
            <img src={actualQuestion?.image} alt="" className="questionImage"/>
        </div>
        <div className="answerGrid">
            {options}
            {buttonSection}
        </div>
    </div>
}