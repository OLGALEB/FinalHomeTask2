//import { SearchRepository } from "../objectRepository/searchObject";
import { browser, by, element, ElementFinder, ExpectedConditions, Key } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { ozByPage } from "../pageObject/ozBy.page";
//import { SearchElement } from "../pageObject/search.page";

export = function exampleSteps() {

    //const footerPage = new FooterPage;
    //const searchElement = new SearchElement;
    const headerPage = new ozByPage;

    this.setDefaultTimeout(700 * 1000);

    let browserHacks = new BrowserHacks;

    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Homepage oz.by was opened$/, async () => {
        await headerPage.navigateToOzBy();
    });

    this.Then(/^User log in via email$/, async () => {
        await headerPage.LogIn();
    });



    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Homepage oz.by was opened1$/, async () => {
        await headerPage.navigateToOzBy();
    });

    this.Then(/^User log in via email1$/, async () => {
        await headerPage.LogIn();
    });

    this.Then(/^Click on id link$/, async () => {
        await headerPage.clickOnUserInfoLink();
    });


    this.Then(/^User was redirected to account info page$/, async () => {
        headerPage.personalAccountInfoResult();
    });


    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Homepage oz.by was opened2$/, async () => {
        await headerPage.navigateToOzBy();
    });

    this.Then(/^User log in via email2$/, async () => {
        await headerPage.LogIn();
    });

    this.Then(/^Personal info page was opened$/, async () => {
        await headerPage.clickOnUserInfoLink();
    });


    this.Then(/^Click "Мои отзывы" link$/, async () => {
        await headerPage.redirectToMyReview();
    });

    this.Then(/^User was redirected to review's tab$/, async () => {
        await headerPage.redirectToMyReviewResult();
    });



    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Homepage oz.by was opened3$/, async () => {
        await headerPage.navigateToOzBy();
    });

    this.Then(/^User log in via email3$/, async () => {
        await headerPage.LogIn();
    });

    this.Then(/^Personal account info page was opened$/, async () => {
        await headerPage.clickOnUserInfoLink();
    });

    this.Then(/^"Мои отзывы" page was opened$/, async () => {
        await headerPage.redirectToMyReview();
    });

    this.Then(/^Click on OZ logo$/, async () => {
        await headerPage.сlickOnOzByLogo();
    });

    this.Then(/^User was redirected main page$/, async () => {
        await headerPage.redirectToMainResult();
    });


 
    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Homepage oz.by was opened4$/, async () => {
        await headerPage.navigateToOzBy();
    });

    this.Then(/^User log in via email4$/, async () => {
        await headerPage.LogIn();
    });

    this.Then(/^Move cursor to user's nickname$/, async () => {
        await headerPage.moveCursorToPersonalNick();
    });

    this.Then(/^Click "Персональная скидка"$/, async () => {
        await headerPage.clickOnPersonalDiscount();
    });

    this.Then(/^User was redirected to "Персональная скидка" page$/, async () => {
        await headerPage.redirectToDiscountPageResult();
    });




    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Homepage oz.by was opened5$/, async () => {
        await headerPage.navigateToOzBy();
    });

    this.Then(/^User log in via email5$/, async () => {
        await headerPage.LogIn();
    });


    this.Then(/^User clicked on "Корзина" icon$/, async () => {
        await headerPage.clickOnShopBasket();
    });


    this.Then(/^"Корзина" page was opened$/, async () => {
        await headerPage.openedBasketPageResult();
    });





    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^Homepage oz.by was opened6$/, async () => {
        await headerPage.navigateToOzBy();
    });

    this.Then(/^User log in via email6$/, async () => {
        await headerPage.LogIn();
    });

    this.Then(/^User clicked on "Корзина"$/, async () => {
        await headerPage.clickOnShopBasket();
    });


    this.Then(/^"Корзина" page  opened$/, async () => {
        await headerPage.openedBasketPageResult();
    });

    this.Then(/^Check "Выбрать все товары" checkbox$/, async () => {
        await headerPage.allCheckBoxClick();
    });

    this.Then(/^Checkbox was checked$/, async () => {
        await headerPage.allCheckboxCheck();
    });

    this.Then(/^Click  "Удалить" button$/, async () => {
        await headerPage.removeAllProductsCheck();
    });

    this.Then(/^CLick "Да,удалить" button$/, async () => {
        await headerPage.removeSubmit();
    });

    this.Then(/^All products are removed$/, async () => {
        await headerPage.openedBasketPageResult();
    });







    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });



    this.Given(/^Homepage oz.by was opened7$/, async () => {
        await headerPage.navigateToOzBy();
    });

    this.Then(/^User log in via email7$/, async () => {
        await headerPage.LogIn();
    });

    this.Then(/^User fill in productName in top search field$/, async () => {
        await headerPage.fillinTopSearch();
    });


    this.Then(/^Press SEARCH$/, async () => {
        await headerPage.pressSearch();
    });

    this.Then(/^Press "Положить в корзину"$/, async () => {
        await headerPage.putInBasketClick();
    });

    this.Then(/^Click "Уже в корзине"$/, async () => {
        await headerPage.clickAlreadyInTheBasketButton();
    });

    this.Then(/^User redirected to "Корзина" page$/, async () => {
        await headerPage.openedBasketPageResult();
    });





    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^Homepage oz.by was opened8$/, async () => {
        await headerPage.navigateToOzBy();
    });

    this.Then(/^User log in via email8$/, async () => {
        await headerPage.LogIn();
    });

    this.Then(/^User clicked on "Корзина" icon1$/, async () => {
        await headerPage.clickOnShopBasket();
    });


    this.Then(/^"Корзина" page  was opened with any product$/, async () => {
        await headerPage.openedBasketPageResult();
    });


    this.Then(/^User check selected product checkbox$/, async () => {
        await headerPage.checkBoxClick();
    });


    this.Then(/^Checkbox must be checked$/, async () => {
        await headerPage.checkboxCheck();
    });





    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^Homepage oz.by was opened9$/, async () => {
        await headerPage.navigateToOzBy();
    });

    this.Then(/^User log in via email9$/, async () => {
        await headerPage.LogIn();
    });

    this.Then(/^User clicked on "Корзина" icon2$/, async () => {
        await headerPage.clickOnShopBasket();
    });


    this.Then(/^"Корзина" page  was opened$/, async () => {
        await headerPage.openedBasketPageResult();

    });
    
    this.Then(/^Click on OzBy logo$/, async () => {
        await headerPage.сlickOnOzByLogo();
    });


    this.Then(/^User was redirected back to main page$/, async () => {
        await headerPage.redirectToMainResult();
    });
}