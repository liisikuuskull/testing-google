describe("Accessing Gmail and Sign In", () => {
    it("should be able to access Gmail and sign in with test user", () => {
      console.log("Starting test...");
  
      // Visit the Gmail login page
      console.log("Visiting Gmail login page");
      cy.visit("https://accounts.google.com/ServiceLogin");
  
      // Click on the "Gmail" link
      console.log("Clicking on 'Gmail' link");
      cy.contains("Gmail").click();
  
      // Wait for Gmail page to load and verify its URL
      console.log("Waiting for Gmail page to load");
      cy.url().should("include", "mail.google.com");
  
      // Click on the "Logi sisse" link
      console.log("Clicking on 'Logi sisse' link");
      cy.contains("Sign in").click();
  
      // Wait for email input field to be visible
      console.log("Waiting for email input field to be visible");
      cy.get('[type="email"]', { timeout: 15000 }).should("be.visible");
  
      // Enter the test user email
      console.log("Entering test user email");
      cy.get('[type="email"]').type("marimaasikas680@gmail.com").trigger("input");
  
      // Click the "Next" button
      console.log("Clicking 'Next' after entering email");
      cy.contains("Next").click();
  
      // Wait for password input field to be visible
      console.log("Waiting for password input field to be visible");
      cy.get('[type="password"]').should("be.visible");
  
      // Enter the test user password
      console.log("Entering test user password");
      cy.get('[type="password"]').type("MariMaasikas555&").trigger("input");
  
      // Click the "Next" button
      console.log("Clicking 'Next' after entering password");
      cy.contains("Järgmine").click();
  
      // Verify that you are logged in
      console.log("Verifying successful login");
      cy.contains("Tere, marimaasikas680").should("be.visible");
  
      console.log("Test completed successfully.");
    });
  });
  