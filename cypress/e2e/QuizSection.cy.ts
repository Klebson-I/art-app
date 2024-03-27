
beforeEach(() => {
    cy.visit('http://localhost:3000');
});
  
describe('Test QuizSection functionality', () => {
    it('Should move to quiz when Start Game button is clicked', () => {
        const button = cy.get('[data-testid="scroll-to-quiz-button"]');
        button.click();
        cy.wait(2000);
        const goToQuizButton = cy.get('[data-testid="go-to-quiz-button"]');
        goToQuizButton.click();
        cy.wait(1000);
        const gameBoard = cy.get('.gridContainer');
        gameBoard.should('be.visible');
    });
})