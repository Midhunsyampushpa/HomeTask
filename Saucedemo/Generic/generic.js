var webdriver = require('selenium-webdriver');
require('chromedriver')

//Lauch the session-User need only to call this function to launch a new session in any test scenario
//@params-url- url to naviagte to the site
exports.launchServer = async function (url) {
  
  try {
    global.driver =  new webdriver.Builder().forBrowser('chrome').build(),
    By=webdriver.By,
    Key=webdriver.Key,
    Button=webdriver.Button,
    until=webdriver.until;

   // console.log("launch")
    driver.manage().window().maximize();
    //console.log("maximze")
    await driver.get(url)
    //console.log("hello1")
    await driver.manage().setTimeouts( { implicit: 10000 } )
   // console.log("hello2")
  //  var t1=await driver.findElement(By.id('login_credentials')).getText();
  //  console.log(t1)
   // console.log("passed")
    
  } catch (err) {
    console.log(err)
    
  }
    
   
}

//Closing the server-Made as generic function, so it can be used in any test scenarios
exports.closeServer=async()=>{
  try {

    await driver.quit();
    
  } catch (err) {
    console.log(err)
    
  }
}

//Logout functionality made as generic since it can be used in any test scenarios
exports.logOut=async()=>{
  try {
    await driver.findElement(By.id('react-burger-menu-btn')).click();
    await driver.findElement(By.id('logout_sidebar_link')).click();
    
  } catch (err) {
    console.log(err)
    
  }
}