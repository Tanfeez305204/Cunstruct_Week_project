const { defineConfig } = require("cypress");
async function setupNodeEvents(on,config){
  return config;
};
module.exports=defineConfig({

  e2e:{
    setupNodeEvents,
    specPattern:'Search_step/ContactUS_TEST/*.js'
    //specPattern:'Search_step/*.js'

  }
});
