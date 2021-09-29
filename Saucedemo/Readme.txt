*Introduction
This package contains two test scenarios
First scenario:
	-This is a postive test scenario
	-This workflow will login>add a product> verify the product in checkout screen>Verify payment>Completes the shopping
Second scenario:
	-This is a negative test scenario
	-This workflow will ensures that the user should not be provided with checkout button if the cart is empty.

*Requirements:
	-This package contains the necessary node_modules.
	-Make sure the system has nodejs already installed
*To execute:
	-Open the folder in VSCode
	-Open terminal
	-Navigte to $\Saucedemo\SauceDemoWorkFlows\WorkflowRepository
	-node .\{{workflowfilename}}
		- Example: node .\workflow1.js
*Commands used for the project
	-npm install selenium-webdriver
	-npm install chromedriver