describe('Test PageHeader functionality', () => {
  it('Should move to artist section when move button is clicked', () => {
    cy.visit('http://localhost:3000');
    const button = cy.get('[data-testid="scroll-to-artist-button"]');
    button.click();
    cy.wait(2000);
    const section = cy.get('[data-testid="artist-section"]');
    section.should('be.visible');
  });
  it('Should move to quiz section when move button is clicked', () => {
    cy.visit('http://localhost:3000');
    const button = cy.get('[data-testid="scroll-to-quiz-button"]');
    button.click();
    cy.wait(2000);
    const section = cy.get('.quizSectionContainer');
    section.should('be.visible');
  });
  it('Should show image tooltip when mouse is over', () => {
    cy.visit('http://localhost:3000');
    const image = cy.get('img');
    image.first().trigger('mouseover');
    cy.wait(1000);
    cy.get('[role="tooltip"]').should('be.visible');
  })
})