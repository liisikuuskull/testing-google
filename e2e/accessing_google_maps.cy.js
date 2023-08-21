describe("Accessing Google Maps for Tallinn", () => {
  it("should accept consent and access Google Maps for Tallinn", () => {
    // Open Google Maps in a new tab for Tallinn
    cy.window().then((win) => {
      win.open("https://www.google.com/maps/place/Tallinn", "_blank");
    });

    // Switch to the new tab
    cy.get("body").type("{cmd}{shift}{[}");

    // Wait for the consent page to load
    cy.contains("Before you continue to Google").should("be.visible");

    // Use invoke() to trigger a click using the DOM method
    cy.get(".VfPpkd-RLmnJb").should("be.visible").invoke("click");

    // Wait for the Google Maps page to load
    cy.contains("Tallinn").should("be.visible");
    // Perform further tests on Google Maps functionality if needed

    // Close the new tab
    cy.get("body").type("{cmd}{w}");
  });
});
