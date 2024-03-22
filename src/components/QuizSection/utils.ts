import { GAME_STATE } from "./constants";

export const getButtonText = (isGamePending: boolean) => {
    const text = isGamePending
        ? GAME_STATE.CONTINUE_GAME
        : GAME_STATE.START_GAME;
    return text;
}