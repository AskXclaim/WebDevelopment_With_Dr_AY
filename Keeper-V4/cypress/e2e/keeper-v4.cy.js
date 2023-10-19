describe("Keeper-V4",()=>{
  context("Is Keeper-V4 hosted in the desired environment",()=>{
    beforeEach("Go to base url",()=>{
      cy.visit("/");
    });
    const environmentUrl = Cypress.config().baseUrl;
    it(`Is Keeper-V4 hosted in ${environmentUrl}`,()=>{
      cy.get("header").should("exist");
    });
    
    it("Is there only one header tag present",()=>{
      cy.get("header").eq(1).should("not.exist");
    });
    
    it("Is application name correct",()=>{
      const appName = Cypress.env("appName");
      cy.get("header").first(). within(()=>{
       cy.findByText(appName).should("exist")});
      //This is the same as the one above
      // cy.get("h1").findByText(appName).should("exist")});

    cy.get("h1").eq(1).should("not.exist");
    });
  });
});