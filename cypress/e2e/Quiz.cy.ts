
beforeEach(() => {
    cy.visit('http://localhost:3000/quiz');
});

const MUI_SUCCESS = '.MuiButton-colorSuccess';
const MUI_STANDARD = '.MuiButton-colorSecondary';
  
describe('Test Quiz functionality', () => {
    it('Should enable next question button when option is clicked', () => {
        const optionButtons = cy.get('[data-testid="quiz-option-button"]');
        optionButtons.first().click();
        cy.wait(500);
        const nextQuestionButton = cy.get('[data-testid="next-question-button"]');
        nextQuestionButton.should('be.not.disabled');
    });
    it('Should show good answer when option is clicked', () => {
        const optionButtons = cy.get('[data-testid="quiz-option-button"]');
        optionButtons.first().click();
        cy.wait(500);
        const successOption = cy.get(`${MUI_SUCCESS}`);
        successOption.should('be.visible');
    });
    it('Should navigate to next question after selection of option and proceed with Next Question button', () => {
        const optionButtons = cy.get('[data-testid="quiz-option-button"]');
        optionButtons.first().click();
        cy.wait(500);
        const nextQuestionButton = cy.get('[data-testid="next-question-button"]');
        nextQuestionButton.click();
        const newOptionButtons = cy.get(`${MUI_STANDARD}`);
        newOptionButtons.should('have.length', 4);
    });
    it('Should increment question indicator to 2 when next question is load', () => {
        const optionButtons = cy.get('[data-testid="quiz-option-button"]');
        optionButtons.first().click();
        cy.wait(500);
        const nextQuestionButton = cy.get('[data-testid="next-question-button"]');
        nextQuestionButton.click();
        const roundIndicator = cy.get('[data-testid="index-indicator"]');
        roundIndicator.should('contain', 'Question 2 / 10');
    });
})