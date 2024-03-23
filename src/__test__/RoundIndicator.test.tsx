import { render, screen } from "@testing-library/react";
import { RoundIndicator } from "../components/RoundIndicator/RoundIndicator";
import { INDEX_INDICATOR, SCORE_INDICATOR } from "../components/testAccessors";

const renderIndicator = (index: number, score: number) => {
    const { container } = render(
        <RoundIndicator 
            actualQuestionIndex={index}
            score={score}
        />
    );
    return container;
}

describe('Test RoundIndicator', () => {
    it('Should display score when its given in props', () => {
        const INDEX = 0;
        const SCORE = 1;
        const expectedIndex = 1;
        renderIndicator(INDEX, SCORE);
        const scoreHeader = screen.getByTestId(SCORE_INDICATOR);
        const indexHeader = screen.getByTestId(INDEX_INDICATOR);
        expect(scoreHeader).toHaveTextContent(`Score: ${SCORE}`);
        expect(indexHeader).toHaveTextContent(`Question ${expectedIndex} / 10`);
    });
});

export {}