import { useGameState } from "../context/GameContext"

export const useIsGamePending = () => {
    const { game } = useGameState();
    return !!game.length;
}