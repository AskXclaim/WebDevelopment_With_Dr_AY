describe("Tests about how things are layed out and design features like colour etc", () => {
    beforeEach("browse to correct url based on the environment", () => {
        cy.visit("/");
    });
    context("General body element layout/design", () => {
        it("Is body element set out and designed right", () => {
            cy.get("body")
                .should("have.css", "background-color", "rgb(238, 238, 238)")
                .should("have.css", "background-image", 'url("https://www.transparenttextures.com/patterns/cubes.png")')
                .should("have.css", "padding", "0px 16px")
                .should("have.css", "margin", "0px")
                .should("have.css", "font-family", "Montserrat, sans-serif");
        });
    });
    
    context("General div='root' element layout/design", ()=>{
        it(" Is div='root' element set out and designed right",  ()=> {
            cy.get("body").within(()=>{
               cy.get("header")
                   .should("exist")
                   .should("contain.html","h1")
                   .should("have.css","background-color","rgb(245, 186, 19)")
                   .should("have.css","margin","0px -16px");
               cy.get("form.create-note")
                   .should("exist")
                   .should("contain.html","textarea");
               cy.findByPlaceholderText("Take a note...").should("exist");
               cy.get("form.create-note button").should("exist");
               cy.get("footer").then(()=>{
               const  year= new Date().getFullYear();
                   cy.get("footer")
                       .should("exist")
                       .should("contain.text",`Copyright ⓒ ${year}`);   
               });
            });
        });
    });
});