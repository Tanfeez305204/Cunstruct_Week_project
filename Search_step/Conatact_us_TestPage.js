import Login from "./Login_po";
import Search from "./Search_po";
import ContactUs from "./ContactUS_TEST/Contact_us";

describe('Test Tutorialninjas', () => {
    
    const Login1=new Login();
    const Search1=new Search();
    
    
    
    it('Login test', () => {
        
        Login1.Login_in();
        
        Search1.Search_po();
        

        
    });


        
        
    
});

