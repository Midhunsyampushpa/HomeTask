let genericHandle = require('../../Generic/generic');
require('../../config');
require('../DataRepository/dataLibrary1');
require('../ObjectRepository/objectLibrary1')
var pageHandle=require('../PageRepository/pageLibrary1')


const start = async () => {

    try{
        //This workflow will add a product-->Checkout-->Complete the shopping
        await genericHandle.launchServer(url)
        await pageHandle.Login(loginIdentifier,loginData); //Login functionality
        await pageHandle.AddProductToCart(addProductToCartIdentifier,addProductToCartData); //Adding a product
        await pageHandle.CheckoutProduct(checkoutProductIdentifier,checkoutProductData); //Checkout page of the product
        await genericHandle.logOut(); //Logout from saucedemo
       await genericHandle.closeServer(); 

    }
    catch(err){
        console.log(err)
    }

  

    
}

start();