class Search{
    Search_po(){
        cy.get('input[name="search"]').type('iPod Shuffle');
        cy.get('.btn-default').click();
        cy.xpath('//*[contains(text(),"Add to Cart")]').click({force:true});
        cy.get('a[title="Shopping Cart"]').click();
        cy.get('a[class="btn btn-primary"]',{timeout:12000}).click();
        cy.xpath('(//*[@type="radio"])[2]').check().should('be.visible').and('be.checked').and('have.attr','type')
        cy.get('input[name="firstname"]').type("Tanfeez");
        cy.get('input[name="lastname"]').type('Ahmad');
        cy.get('#input-payment-address-1').type('Ramnagar');
        cy.get('#input-payment-address-2').type('West champaran');
        cy.get('#input-payment-city').type('betiah');
        cy.get('#input-payment-postcode').type('845106');
        cy.get('#input-payment-country').select('India');
        cy.get('#input-payment-zone').select('Bihar');
        cy.get('input[id="button-payment-address"]').click();
    
         cy.get('input[id="button-shipping-address"]').click();
         cy.get('input[id="button-shipping-method"]').click();
        cy.get('input[name="agree"]').check();

         cy.get('input[id="button-payment-method"]').click();
         cy.get('input[id="button-confirm"]').click();
        cy.xpath('//*[contains(text(),"store owner")]').click();
        cy.contains('MP3 Players').click();
        cy.contains('Show AllMP3 Players').click()
    }
}

export default Search;