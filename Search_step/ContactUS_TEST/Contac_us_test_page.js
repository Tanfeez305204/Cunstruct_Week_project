import ContactUs from "./Contact_us";

describe('Test the contact us page', () => {
    const test1=new ContactUs();
    const test2=new ContactUs();
    const test3=new ContactUs();
    const test4=new ContactUs();
    const test5=new ContactUs();

    it('test1 after login', () => {
        // keeping name and email text field blank and check error message dispalying
        test1.visits();
        test1.contact_us_test_01();
        // with all valid credentials and check it is submitting or not
        test2.visits();
        test2.contact_us_test_02();
// keeping note text field empty and essert error message.
        test3.visits();
        test3.contact_us_test_03();
//  using wrong email
        test4.visits();
        test4.contact_us_test_04();

        // verify conact us heading visibility
        test4.visits();
        test4.contact_us_test_05();

    });
});