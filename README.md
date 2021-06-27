# Pre-reqs: 
Install node.js LTS version, JDK and Visual Studio Code 

# Install steps: 
Open folder project in VS Code, and then in terminal: 

> npm install 
> npm run postinstall 
> npm run update-reporter 

# Usage: 
(Optional)in the first terminal window in VS Code: 
> npm run webdriver 

in the second terminal window in VS Code: 
> npm run tests 

to get the test results opened in BDD HTML format in browser: 
> npm run report 

then in project directory open target/site/serenity/index.html

# Selecting scenarios to run: 
In protractor.conf.js change tags (in cucumberOpts section, it has comments for help, read it before doing something) 

# Additional (not must-have, but pretty useful setup): 
To be able to perform "Go to definition" on Gherkin steps in VS Code 

Install "Cucumber (Gherkin) Full Support" extension from VS Code extensions 

Then in Extensions select a settings(gears) button under "Cucumber (Gherkin) Full Support">Extension Settings>click on "Edit in settings.json" and then just delete all stuff in it and paste next lines: 
 
> {
> "cucumberautocomplete.steps": "/features/stepDefinitions/*.steps.ts",
> "cucumberautocomplete.syncfeatures": "features/featureFiles/*feature",
> "cucumberautocomplete.customParameters": []
> }

Then just re-open VS Code 