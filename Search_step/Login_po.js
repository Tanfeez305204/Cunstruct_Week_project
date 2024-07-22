class Login{

    Login_in(){
        cy.visit('https://tutorialsninja.com/demo/index.php?route=account/login');
        cy.get('#input-email').type('ta2nfeez@gmail.com');
        cy.get('#input-password').type('Tanfeez@1');
        cy.get('input[value="Login"]').click();
    }
}
export default Login;