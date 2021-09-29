const { By } = require('selenium-webdriver');
require('../../Generic/generic')

//Login functionality
//@params-tempLoginIdentifier- for defining the xpath,id...
//@params-tempLoginData--for defining the username,password
exports.Login=async (tempLoginIdentifier,tempLoginData)=>{

    try{

        var username=await driver.findElement(By.id(tempLoginIdentifier.username));
        await username.sendKeys(tempLoginData.username);
        var password=await driver.findElement(By.id(tempLoginIdentifier.password));
        await password.sendKeys(tempLoginData.password);
        var loginButton=await driver.findElement(By.id(tempLoginIdentifier.loginButton));
        await loginButton.click();
        var isLogin= await driver.findElement(By.xpath(tempLoginIdentifier.loginSuccess)).isDisplayed();
            if(isLogin==true){
                console.log("Login is successful. Logged in as "+tempLoginData.username+"--Passed")
            }
            else{
                console.log("Login Failed. Logged in as "+tempLoginData.username+"--Failed")
            } 
    }
    catch(err){
        console.log(err)
    }
     
}

//This function is check the checkout button is present if the cart is empty
//@params-tempEmptyCheckoutIdentifier- for defining the xpath,id...
exports.EmptyCheckout=async(tempEmptyCheckoutIdentifier)=>{
    try {
        
        var countOfRemoveButton=(await driver.findElements(By.xpath(tempEmptyCheckoutIdentifier.countOfRemoveButtons))).length;
        //console.log(countOfRemoveButton);
        //Checking if any products are already present in the cart
            if(countOfRemoveButton==0){
                console.log("There are no products added to the cart")
            }
        else{
            console.log("There are  products present in the cart--Deleting the products from cart")
                while(countOfRemoveButton!=0){  //if any product is already present in the cart, then it removes all the added item
                    await driver.findElement(By.xpath("("+tempEmptyCheckoutIdentifier.countOfRemoveButtons+")[1]")).click();
                    countOfRemoveButton--
                }
                console.log("Products are deleted from the cart")
           
        }
        await driver.findElement(By.xpath(emptyCheckoutIdentifier.shoppingCart)).click(); //User navigates to cart page with empty cart
        var yourCart=await driver.findElement(By.xpath(emptyCheckoutIdentifier.yourCartPage)).isDisplayed(); 
            if(yourCart==true){
                console.log("The user navigated to YOUR CART page--Passed")
            }
            else{
                console.log("The user is not navigated to YOUR CART page--Failed")
            }
            //checking if the checkout button is present or not
        var isCheckoutButtonPresent=await driver.findElement(By.id(emptyCheckoutIdentifier.checkoutButtonVisible)).then (function(){
            return true;
        },function(err){
            return false
        });
        if(isCheckoutButtonPresent==true){
            console.log("The checkout button is present--Failed")
        }
        else{
            console.log("The checkout button is not present--Passed")
        }

    } catch (err) {
        console.log(err)
    }
}

