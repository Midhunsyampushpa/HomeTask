let genericHandle = require('../../Generic/generic');
require('../../config');
require('../DataRepository/dataLibrary2');
require('../ObjectRepository/objectLibrary2')
var pageHandle=require('../PageRepository/pageLibrary2')


const start = async () => {

    try{
        //This workflow is to make sure that the checkout button should not be present if the cart is empty-->Negative Scenario
        await genericHandle.launchServer(url)
        await pageHandle.Login(loginIdentifier,loginData); //Login functionality
        await pageHandle.EmptyCheckout(emptyCheckoutIdentifier)
        await genericHandle.logOut(); //Logout from saucedemo
        await genericHandle.closeServer(); 

    }
    catch(err){
        console.log(err)
    }

  

    
}

start();