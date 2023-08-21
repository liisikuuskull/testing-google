describe("Search by Image", () => {
    it("should be able to search by image using the 'Search by image' button", () => {
      cy.visit("https://www.google.com/");
  
      // Close the cookie notice if it's present
      cy.get('#L2AGLb').click();
  
      // Find the "Pildid" link and click on it
      cy.contains("Pildid").click();
  
      // Wait for the image search page to load
      cy.url().should("include", "imghp");
  
      // Click on the "Search by image" button
      cy.get('#lensSearchButton').click();
  
      // Upload the image file
      cy.fixture('horse1.jpeg', 'base64').then((fileContent) => {
        cy.get('[type="file"]').attachFile(
          { fileContent, fileName: 'horse1.jpeg', mimeType: 'image/jpeg' },
          { subjectType: 'input' }
        );
      });
  
      // Wait for the image search results or perform other assertions/actions as needed
    });
  });
  
  
  
  