it("Visual regression happo screenshots", function () {
  cy.visit("/");
  cy.get("h1").contains("Mars Rover").should("be.visible");
  cy.get('body').happoScreenshot();
});
