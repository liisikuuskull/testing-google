describe("Google Search", () => {
  it("should be able to perform a search without cookie notice", () => {
    cy.visit("https://www.google.com/");

    // Close the cookie notice if it's present
    cy.get('#L2AGLb').click();

    // Find the search input field and type a search query
    cy.get('[name="q"]').type('Cypress {enter}');

    // Find and click the Google Search button using a more specific selector
    cy.get('input[name="btnK"]').click(); // Use a more specific selector

    // Wait for the search results to load
    cy.get('#search').should('be.visible');

    // Click on the first search result
    cy.get('.rc h3').first().click(); // This selects the first search result's title


    cy.url().should('include', 'cypress.io'); 




   
  });
});
