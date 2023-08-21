
describe("Accessing Gmail", () => {
    it("should be able to access Gmail", () => {
      cy.visit("https://mail.google.com/");
      
      // Click on the "Gmail" link
      cy.contains("Gmail").click();
      
      // Verify that the Gmail page is loaded
      cy.url().should("include", "mail.google.com");
    });
  });