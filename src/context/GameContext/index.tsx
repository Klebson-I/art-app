import { createContext, useContext, useReducer } from "react";
import { GameContextType, GameDispatchContextType, GameStateInterface } from "./types";
import { reducer } from "./reducer";

const gameContext = createContext<GameContextType>(null);
const gameDispatchContext = createContext<GameDispatchContextType>(null);

export const GameState: React.FC<any> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        score: null,
        actualQuestionIndex: null,
        game: [],
    } as GameStateInterface);
    return <gameContext.Provider value={state}>
        <gameDispatchContext.Provider value={dispatch}>
            { children }
        </gameDispatchContext.Provider>
    </gameContext.Provider>
}

export const useGameState = () => {
    const context = useContext(gameContext);
    if (context === null) {
        throw new Error("useGameState must be used within a GameProvider");
    }
    return context;
};

export const useGameStateDispatch = () => {
    const context = useContext(gameDispatchContext);
    if (context === null) {
        throw new Error("useGameStateDispatch must be used within a GameProvider");
    }
    return context;
};