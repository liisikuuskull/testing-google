describe("Sign Out", () => {
    beforeEach(() => {
        // Log in the test user before each test
        cy.visit("https://www.google.com/");
        // Your login code here...
    });

    it("should be able to sign out", () => {
        // Click on the user profile button or icon
        cy.get('[aria-label="Google Account: marimaasikas680"]').click();

        // Click on the "Sign out" button
        cy.contains("Logi välja").click();

        // Verify that the user is logged out
        // For example, you can verify that the "Logi sisse" link is visible again
        cy.contains("Logi sisse").should("be.visible");
    });
});

  

