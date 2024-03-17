import { render, screen } from "@testing-library/react";
import { withBowDecoration } from "../components/Wrappers/withBowDecoration/withBowDecoration";
import { WITH_BOW_1, WITH_BOW_2, WITH_BOW_3, WITH_BOW_4 } from "../components/testAccessors";

const TEST_ID = 'test-id';

const TestComponent: React.FC<{}> = () => {
    return <span data-testid={TEST_ID}>Test component</span>
};

const renderDecorated = () => {
    const Decorated = withBowDecoration(TestComponent);
    const { container } = render(
        <Decorated />
    )
    return container;
}

describe('Test withBowDecoration HOC', () => {
    it('Should decorate given element with 2 bows', () => {
        renderDecorated();
        [WITH_BOW_1, WITH_BOW_2, WITH_BOW_3, WITH_BOW_4, TEST_ID].forEach((testId) => {
            const element = screen.getByTestId(testId);
            expect(element).toBeInTheDocument();
        })
    });
})

export {};