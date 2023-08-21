

//POOLIK

describe("Language Selection on Google", () => {
    it("should be able to select a different language", () => {
      cy.visit("https://www.google.com/");
  
      // Click on the "Language" link or button
      cy.contains("Language").click();
  
      // Choose a different language option
      // Replace "English" with the actual text of the language option
      cy.contains("English").click();
  
      // Wait for the page to refresh
      cy.wait(2000);
  
      // Verify that the page's text is in the selected language
      cy.contains("Search").should("be.visible"); // Replace "Search" with a keyword in the selected language
  
      // Go back to the default language
      cy.contains("Language").click();
      cy.contains("Default").click();
  
      // Wait for the page to refresh
      cy.wait(2000);
  
      // Verify that the page's text is back in the default language
      cy.contains("Search").should("be.visible"); // Replace "Search" with the same keyword as above
    });
  });
  