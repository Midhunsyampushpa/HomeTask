global.loginIdentifier={};
loginIdentifier.username="user-name";
loginIdentifier.password="password";
loginIdentifier.loginButton="login-button"
loginIdentifier.loginSuccess="//div[contains(@class,'app_logo')]"

global.addProductToCartIdentifier={};
addProductToCartIdentifier.countOfRemoveButtons="//button[text()='Remove']";
addProductToCartIdentifier.addProduct="(//div[contains(text(),'inputData')]/following::button[text()='Add to cart'])[1]";
addProductToCartIdentifier.firstProductisAdded="//span[(text()='1')]";
addProductToCartIdentifier.shoppingCartLink="//a[contains(@class,'shopping_cart')]";
addProductToCartIdentifier.yourCartPage="//span[contains(text(),'Your Cart')]";
addProductToCartIdentifier.getTheAddedProductText="//div[@class='inventory_item_name']";
addProductToCartIdentifier.checkoutButton="//button[text()='Checkout']";

global.checkoutProductIdentifier={};
checkoutProductIdentifier.checkoutScreen="//span[contains(text(),'Checkout')]";
checkoutProductIdentifier.firstName="first-name";
checkoutProductIdentifier.lastName="last-name";
checkoutProductIdentifier.postalCode="postal-code";
checkoutProductIdentifier.continueButton="continue";
checkoutProductIdentifier.overviewPage="//span[contains(text(),'Checkout: Overview')]";
checkoutProductIdentifier.quantityOfProduct="//div[@class='cart_quantity']";
checkoutProductIdentifier.productName="//div[@class='inventory_item_name']";
checkoutProductIdentifier.itemTotalSummary="//div[contains(@class,'summary_subtotal')]";
checkoutProductIdentifier.taxSummary="//div[contains(@class,'summary_tax_label')]";
checkoutProductIdentifier.totalSummary="//div[@class='summary_total_label']";
checkoutProductIdentifier.finishButton="finish";
checkoutProductIdentifier.checkoutCompletePage="//span[text()='Checkout: Complete!']";
checkoutProductIdentifier.thankyou="//div[@id='checkout_complete_container']/h2[@class='complete-header']";
