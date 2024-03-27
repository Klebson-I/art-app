import { QuestionsAssignsWithOptionsListType } from "../../components/QuizBoard/types";
import { ScrollStateAction } from "../ScrollContext/types";

export interface GameStateInterface {
    score: number | null,
    actualQuestionIndex: number | null,
    game: QuestionsAssignsWithOptionsListType,
}

export interface GameStateAction extends ScrollStateAction {};

export type GameContextType = GameStateInterface | null;
export type GameDispatchContextType = React.Dispatch<GameStateAction> | null;