class ContactUs{
    visits(){
        cy.visit('https://tutorialsninja.com/demo/index.php?route=information/contact');
    }

    contact_us_test_01(){
       // keepping name and email blank
       cy.get('input[id="input-name"]').type(' ');
        cy.get('input[id="input-email"]').type(' ');
        cy.get('#input-enquiry').type('hye i want to know about ypur product and their all details so please respond me');
        cy.get('input[type="submit"]').click();
        cy.get('.text-danger').should('contains.text','Name must be between 3 and 32 characters!').should('be.visible');
        //cy.get('a[class="btn btn-primary"]').click
    }

    contact_us_test_02(){
        // using valid credentials
        cy.get('input[id="input-name"]').type('Tanfeez');
        cy.get('input[id="input-email"]').type('ta2nfeez@gmail.com');
        cy.get('#input-enquiry').type('hye i want to know about ypur product and their all details so please respond me');
        cy.get('input[value="Submit"]').click();
        cy.get('a[class="btn btn-primary"]').click();
    }

    contact_us_test_03(){
        cy.get('input[id="input-name"]').type('Tanfeez');
        cy.get('input[id="input-email"]').type('ta2nfeez@gmail.com');
        cy.get('#input-enquiry').type('hye there');
        cy.get('input[value="Submit"]').click();
        cy.get('.text-danger').should('contains.text','Enquiry must be between 10 and 3000 characters!').should('be.visible');
       
        //cy.get('a[class="btn btn-primary"]').click();


    }

    contact_us_test_04(){

        cy.get('input[id="input-name"]').type('Tanfeez');
        cy.get('input[id="input-email"]').type('ta2nfeezgmail.com');
        cy.get('#input-enquiry').type('hye there I want to know about tutorials ninja business work flow');
        cy.get('input[value="Submit"]').click();
       
    }
// verify heading texts and location
    contact_us_test_05(){
        cy.contains('Contact Us').should('be.visible')
        cy.get('h1').contains('Contact Us').should('have.text','Contact Us')
        cy.get('h3').contains('Our Location').should('have.text','Our Location')
        cy.get('.panel-body').should('be.visible')
    
        
    }

}

export default ContactUs;