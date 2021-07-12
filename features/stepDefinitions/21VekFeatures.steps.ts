

import { BrowserHacks } from "../../support/browserHacks";
import { Vek21Page } from "../pageObject/21Vek.page";


export = function exampleSteps() {


    const vek21Page = new Vek21Page;

    this.setDefaultTimeout(700 * 1000);

    let browserHacks = new BrowserHacks;

    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^Homepage 21vek was opened$/, async () => {
        await vek21Page.navigateTo21Vek();
    });

    this.Then(/^User click on Search Field$/, async () => {
        await vek21Page.clickOnSearchField();
    });

    this.Then(/^Fill in product name in search field$/, async () => {
        await vek21Page.fillInSearchField();
    });

    this.Then(/^Select specific value form ddl$/, async () => {
        await vek21Page.selectValueFromDDl();
    });

    this.Then(/^User redirected to specific product page$/, async () => {
        await vek21Page.openedProductPageResult();
    });






    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Specific product page was opened$/, async () => {
        await vek21Page.navigateToSpecificProductPage();
    });

    this.Then(/^User click on PLAY button$/, async () => {
        await vek21Page.clickOnPlayButton();
    });

    this.Then(/^Video iFrame was opened$/, async () => {
        await vek21Page.checkOpenedsIFrame();
    });




    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Specific product page was opened1$/, async () => {
        await vek21Page.navigateToSpecificProductPage();
    });

    this.Then(/^User click on support icon$/, async () => {
        await vek21Page.clickOnSupportIcon();
    });

    this.Then(/^Support Dialog window was opened$/, async () => {
        await vek21Page.checkOpenedChat();
    });





    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Specific product page was opened2$/, async () => {
        await vek21Page.navigateToSpecificProductPage();
    });

    this.Then(/^User click on "В корзину" button$/, async () => {
        await vek21Page.clickOnBasketButton();
    });


    this.Then(/^User opens a shop basket page$/, async () => {
        await vek21Page.navigateToBasketPage();
    });

    this.Then(/^Selected product is presented$/, async () => {
        await vek21Page.checkOrderedProduct();
    });

    this.Then(/^User click "Оформить заказ"$/, async () => {
        await vek21Page.clickOnArrangeOrder();
    });

    this.Then(/^Any payment method was selected$/, async () => {
        await vek21Page.cardPaymentRadioButtonClick();
    });






    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^Homepage 21vek was opened1$/, async () => {
        await vek21Page.navigateTo21Vek();
    });

    this.Then(/^User click on Search Field1$/, async () => {
        await vek21Page.clickOnSearchField();
    });

    this.Then(/^Fill in "Стул"$/, async () => {
        await vek21Page.fillInSearchFieldProduct();
    });

    this.Then(/^Select product value form ddl$/, async () => {
        await vek21Page.selectProductFromDDL();
    });

    this.Then(/^User click on Account ddl$/, async () => {
        await vek21Page.clickOnAccountDDL();
    });

    this.Then(/^Select "Просмотренные"$/, async () => {
        await vek21Page.clickOnViewedProducts();
    });

    this.Then(/^Viewed products page was opened$/, async () => {
        await vek21Page.navigateToViewedProductsPage();
    });


    this.Then(/^User sees selected item$/, async () => {
        await vek21Page.checkViewedProduct();
    });

}
