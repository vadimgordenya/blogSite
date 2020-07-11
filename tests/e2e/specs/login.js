describe("Test login page", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it("Visits Login page", () => {
    cy.visit("/");
    cy.contains("h1", "Login");
  });

  it("Test reset button", () => {
    cy.get('[data-test="email"]').type("Hello world");
    cy.get('[data-test="password"]').type("123456");

    cy.get('[data-test="reset"]').click();

    cy.get('[data-test="email"]').should("be.empty");
    cy.get('[data-test="password"]').should("be.empty");
  });

  it("Test validation email", () => {
    cy.get('[data-test="email"]').type("te");
    cy.get('[data-test="password"]').type("123");
    cy.get(".el-form-item__error").should("be.visible");
  });

  it("Test submit form", () => {
    cy.get('[data-test="reset"]').click();
    cy.get('[data-test="email"]').type("test@gmail.com");
    cy.get('[data-test="password"]').type("123456");

    cy.get('[data-test="submit"]').click();

    cy.url().should("eq", Cypress.config().baseUrl);
  });
});
