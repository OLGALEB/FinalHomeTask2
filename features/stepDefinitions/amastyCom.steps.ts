

import { BrowserHacks } from "../../support/browserHacks";

import { AmastyPage } from "../pageObject/amastyCom.page";


export = function exampleSteps() {


    const amastyPage = new AmastyPage;

    this.setDefaultTimeout(700 * 1000);

    let browserHacks = new BrowserHacks;

    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    
    
    this.Given(/^Amasty.com was opened$/, async () => {
        await amastyPage.navigateToAmastyCom();
    });

    this.Then(/^User click on Enterprise radio button$/, async () => {
        await amastyPage.enterpriseRadioButtonClick();
    });

    this.Then(/^Enterprise radio button was selected$/, async () => {
        await amastyPage.enterpriseRadioButtonCheck();
    });

    this.Then(/^Free price lable is displayed$/, async () => {
        await amastyPage.freePriceCheck();
    });
}