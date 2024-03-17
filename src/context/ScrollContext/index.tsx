import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { ScrollContextType, ScrollDispatchContextType, ScrollStateInterface } from "./types";

const scrollContext = createContext<ScrollContextType>(null);
const scrollDispatchContext = createContext<ScrollDispatchContextType>(null);

export const ScrollState: React.FC<any> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        artistSectionRef: null,
        goToQuizRef: null,
    } as ScrollStateInterface);
    return <scrollContext.Provider value={state}>
        <scrollDispatchContext.Provider value={dispatch}>
            { children }
        </scrollDispatchContext.Provider>
    </scrollContext.Provider>
}

export const useScrollState = () => {
    const context = useContext(scrollContext);
    if (context === null) {
        throw new Error("useScrollState must be used within a ScrollProvider");
    }
    return context;
};

export const useScrollDispatch = () => {
    const context = useContext(scrollDispatchContext);
    if (context === null) {
        throw new Error("useScrollDispatch must be used within a ScrollProvider");
    }
    return context;
};