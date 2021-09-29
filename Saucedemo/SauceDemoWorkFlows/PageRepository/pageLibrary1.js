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


//This function defines the add product functionality
//@params-tempaddProductToCartIdentifier- for defining the xpath,id...
//@params-tempAddProductToCartData--for defining the data
exports.AddProductToCart=async(tempaddProductToCartIdentifier,tempAddProductToCartData)=>{
    try {
        var countOfRemoveButton=(await driver.findElements(By.xpath(tempaddProductToCartIdentifier.countOfRemoveButtons))).length;
        //console.log(countOfRemoveButton);
        //Checking if any products are already present in the cart
            if(countOfRemoveButton>0){
                console.log("There are  products present in the cart")
                while(countOfRemoveButton!=0){  //if any product is already present in the cart, then it removes all the added item
                    await driver.findElement(By.xpath("("+tempaddProductToCartIdentifier.countOfRemoveButtons+")[1]")).click();
                    countOfRemoveButton--
                }
            }
        else{
            console.log("There are no  products present in the cart")
        }
        //Now the cart is empty.Adding product to the cart
        var addProductXpath=tempaddProductToCartIdentifier.addProduct;
             addProductXpath=addProductXpath.replace('inputData',tempAddProductToCartData.backPack);  //replacing the inputData in xpath with the user provided data in data file
            //console.log(addProductXpath);
            console.log("Adding a product")
            await driver.findElement(By.xpath(addProductXpath)).click(); //user clicked add product
            var isProductAdded= await driver.findElement(By.xpath(tempaddProductToCartIdentifier.firstProductisAdded)).isDisplayed(); //checking the cart, whether the product is added
           // console.log("Product is added--"+isProductAdded);
                if(isProductAdded==true){
                    console.log("The cart is incremented--Passed")
                }
                else{
                    console.log("The cart is not incremented--Failed")
                }
            await driver.findElement(By.xpath(tempaddProductToCartIdentifier.shoppingCartLink)).click(); //user clicks the shopping cart
            var isYourCartPagePresent=await driver.findElement(By.xpath(tempaddProductToCartIdentifier.yourCartPage)).isDisplayed();
                if(isYourCartPagePresent==true){
                    console.log("The user navigated to YOUR CART page--Passed")
                }
                else{
                    console.log("The user is unable to navigate to YOUR CART page--Failed")
                }
            var getTheAddedProduct=await driver.findElement(By.xpath(tempaddProductToCartIdentifier.getTheAddedProductText)).getText(); //getting the product name from YOUR CART page
                if(getTheAddedProduct===tempAddProductToCartData.backPack){  //checking whether the product in the cart is same as in the data file
                    console.log("The product is present in the cart--Passed")
                }
                else{
                    console.log("The product is not present in the cart--Failed")
                }
            await driver.findElement(By.xpath(tempaddProductToCartIdentifier.checkoutButton)).click();
            console.log("The user clicked Checkout Button")
    } catch (err) {
        console.log(err)
        
    }
}


//This function defines checkout page functionality
//@params-tempCheckoutProductIdentifier- for defining the xpath,id...
//@params-tempCheckoutProductData--for defining the data
exports.CheckoutProduct=async (tempCheckoutProductIdentifier,tempCheckoutProductData)=> {
    try {
        var isCheckoutScreenDisplayed=await driver.findElement(By.xpath(tempCheckoutProductIdentifier.checkoutScreen)).isDisplayed(); //checking whether the user is in checkout screen
            if(isCheckoutScreenDisplayed==true){
                console.log("The user is in the Checkout screen--Passed")
            }
            else{
                console.log("The user is not in the checkout screen--Failed")
            }
        var firstName=await driver.findElement(By.id(tempCheckoutProductIdentifier.firstName));
        firstName.sendKeys(tempCheckoutProductData.firstName); //adding first name
        var lastName=await driver.findElement(By.id(tempCheckoutProductIdentifier.lastName));
        lastName.sendKeys(tempCheckoutProductData.lastName); //adding last name
        var postalCode=await driver.findElement(By.id(tempCheckoutProductIdentifier.postalCode));
        postalCode.sendKeys(tempCheckoutProductData.postalCode); //adding postal code
        await driver.findElement(By.id(tempCheckoutProductIdentifier.continueButton)).click();
        var checkoutOverviewText=await driver.findElement(By.xpath(tempCheckoutProductIdentifier.overviewPage)).isDisplayed();
        if(checkoutOverviewText==true){
            console.log("The user reached CHECKOUT: OVERVIEW PAGE--Passed")
        }
        else{
            console.log("The user didnot reached CHECKOUT: OVERVIEW PAGE--Failed")   
        }
        var getQuantityofProduct=await driver.findElement(By.xpath(tempCheckoutProductIdentifier.quantityOfProduct)).getText();
            if(getQuantityofProduct=='1'){ //checking whether the cart contains only 1 item
                console.log("Only 1 quantity of the product is present--Passed")
            }
            else{
                console.log("Not Only 1 quantity of the product is present--Failed")
            }
        var getProductName= await driver.findElement(By.xpath(tempCheckoutProductIdentifier.productName)).getText();
            if(getProductName==addProductToCartData.backPack){ //checking whether the cart contains the same item which we added initially
                console.log("Checkout cart contains correct product--Passed")
            }
            else{
                console.log("Checkout cart contains incorrect product--Failed")
            }

            //Calculating the sum of totalitem and tax. We are ensuring here, the sum of TotalItem price+Tax is same as that is displayed in the UI.
            //Extracting the value of Item Total in Overview Page
        var getItemTotal=await driver.findElement(By.xpath(tempCheckoutProductIdentifier.itemTotalSummary)).getText();
        //console.log(getItemTotal);
        var getItemTotalLastIndex=getItemTotal.lastIndexOf("$");
        var getItemTotalLength=getItemTotal.length;
        getItemTotal=getItemTotal.substring(getItemTotalLastIndex+1,getItemTotalLength);
        getItemTotal=Number(getItemTotal);
       // console.log("Parsed Value of Item Total is "+getItemTotal)
        //console.log("success")

        //Extracting the value of Tax in Overview Page
        var getTaxTotal=await driver.findElement(By.xpath(tempCheckoutProductIdentifier.taxSummary)).getText();
        //console.log(getItemTotal);
        var getTaxTotalLastIndex=getTaxTotal.lastIndexOf("$");
        var getTaxTotalLength=getTaxTotal.length;
        getTaxTotal=getTaxTotal.substring(getTaxTotalLastIndex+1,getTaxTotalLength);
        getTaxTotal=Number(getTaxTotal);
        //console.log("Parsed Value of Tax is "+getTaxTotal)

        //Calculating the sum of totalitem and tax.
        var totalPrice=getItemTotal+getTaxTotal;

        //Extracting the value of total price from UI in Overview Page
        var totalPriceUI=await driver.findElement(By.xpath(tempCheckoutProductIdentifier.totalSummary)).getText();
        //console.log(getItemTotal);
        var totalPriceUILastIndex=totalPriceUI.lastIndexOf("$");
        var totalPriceUILength=totalPriceUI.length;
        totalPriceUI=totalPriceUI.substring(totalPriceUILastIndex+1,totalPriceUILength);
        totalPriceUI=Number(totalPriceUI);
        //console.log("Parsed Value of Total is "+totalPriceUI)
            if(totalPrice===totalPriceUI){ //comparing the prices
                console.log("The total price of Item total+Tax is correct--Passed")
            }
            else{
                console.log("The total price of Item total+Tax is incorrect--Failed Total price from UI="+totalPriceUI+"Calculated total price="+totalPrice)
            }
        await driver.findElement(By.id(tempCheckoutProductIdentifier.finishButton)).click();
        console.log("User clicked Finish button") 
        var checkoutCompleteText=await driver.findElement(By.xpath(tempCheckoutProductIdentifier.checkoutCompletePage)).isDisplayed();
            if(checkoutCompleteText==true){  //checking whether the user reached the checkout complete page
                console.log("The user reached checkout complete page--Passed")
            }
            else{
                console.log("The user didnot reached checkout complete page--Failed")
            }
        var thankyouTextUI=await driver.findElement(By.xpath(tempCheckoutProductIdentifier.thankyou)).getText();
        var thankyouText="THANK YOU FOR YOUR ORDER"
            if(thankyouTextUI===thankyouText){
                console.log("Product shopping is complete--Passed")
            }
            else{
                console.log("Product shopping is incomplete--Failed")
            }
        
    } catch (err) {
        console.log(err)
    }
}