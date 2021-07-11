

import { BrowserHacks } from "../../support/browserHacks";
import { OzByPage } from "../pageObject/ozBy.page";


export = function exampleSteps() {


    const ozByPage = new OzByPage;

    this.setDefaultTimeout(700 * 1000);

    let browserHacks = new BrowserHacks;

    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Homepage oz.by was opened$/, async () => {
        await ozByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email$/, async () => {
        await ozByPage.LogIn();
    });



    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Homepage oz.by was opened1$/, async () => {
        await ozByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email1$/, async () => {
        await ozByPage.LogIn();
    });

    this.Then(/^Click on id link$/, async () => {
        await ozByPage.clickOnUserInfoLink();
    });


    this.Then(/^User was redirected to account info page$/, async () => {
        ozByPage.personalAccountInfoResult();
    });


    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Homepage oz.by was opened2$/, async () => {
        await ozByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email2$/, async () => {
        await ozByPage.LogIn();
    });

    this.Then(/^Personal info page was opened$/, async () => {
        await ozByPage.clickOnUserInfoLink();
    });


    this.Then(/^Click "Мои отзывы" link$/, async () => {
        await ozByPage.redirectToMyReview();
    });

    this.Then(/^User was redirected to review's tab$/, async () => {
        await ozByPage.redirectToMyReviewResult();
    });



    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Homepage oz.by was opened3$/, async () => {
        await ozByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email3$/, async () => {
        await ozByPage.LogIn();
    });

    this.Then(/^Personal account info page was opened$/, async () => {
        await ozByPage.clickOnUserInfoLink();
    });

    this.Then(/^"Мои отзывы" page was opened$/, async () => {
        await ozByPage.redirectToMyReview();
    });

    this.Then(/^Click on OZ logo$/, async () => {
        await ozByPage.сlickOnOzByLogo();
    });

    this.Then(/^User was redirected main page$/, async () => {
        await ozByPage.redirectToMainResult();
    });



    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Homepage oz.by was opened4$/, async () => {
        await ozByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email4$/, async () => {
        await ozByPage.LogIn();
    });

    this.Then(/^Move cursor to user's nickname$/, async () => {
        await ozByPage.moveCursorToPersonalNick();
    });

    this.Then(/^Click "Персональная скидка"$/, async () => {
        await ozByPage.clickOnPersonalDiscount();
    });

    this.Then(/^User was redirected to "Персональная скидка" page$/, async () => {
        await ozByPage.redirectToDiscountPageResult();
    });




    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Homepage oz.by was opened5$/, async () => {
        await ozByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email5$/, async () => {
        await ozByPage.LogIn();
    });


    this.Then(/^User clicked on "Корзина" icon$/, async () => {
        
        await ozByPage.clickOnShopBasket();
    });


    this.Then(/^"Корзина" page was opened$/, async () => {
        await ozByPage.openedBasketPageResult();
    });





    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^Homepage oz.by was opened6$/, async () => {
        await ozByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email6$/, async () => {
        await ozByPage.LogIn();
    });

    this.Then(/^User clicked on "Корзина"$/, async () => {
        await ozByPage.clickOnShopBasket();
    });


    this.Then(/^"Корзина" page  opened$/, async () => {
        await ozByPage.openedBasketPageResult();
    });

    this.Then(/^Check "Выбрать все товары" checkbox$/, async () => {
        await ozByPage.allCheckBoxClick();
    });

    this.Then(/^Checkbox was checked$/, async () => {
        await ozByPage.allCheckboxCheck();
    });

    this.Then(/^Click  "Удалить" button$/, async () => {
        await ozByPage.removeAllProductsCheck();
    });

    this.Then(/^CLick "Да,удалить" button$/, async () => {
        await ozByPage.removeSubmit();
    });

    this.Then(/^All products are removed$/, async () => {
        await ozByPage.openedBasketPageResult();
    });







    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });



    this.Given(/^Homepage oz.by was opened7$/, async () => {
        await ozByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email7$/, async () => {
        await ozByPage.LogIn();
    });

    this.Then(/^User fill in productName in top search field$/, async () => {
        await ozByPage.fillinTopSearch();
    });


    this.Then(/^Press SEARCH$/, async () => {
        await ozByPage.pressSearch();
    });

    this.Then(/^Press "Положить в корзину"$/, async () => {
        await ozByPage.putInBasketClick();
    });

    this.Then(/^Click "Уже в корзине"$/, async () => {
        await ozByPage.clickAlreadyInTheBasketButton();
    });

    this.Then(/^User redirected to "Корзина" page$/, async () => {
        await ozByPage.openedBasketPageResult();
    });





    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^Homepage oz.by was opened8$/, async () => {
        await ozByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email8$/, async () => {
        await ozByPage.LogIn();
    });

    this.Then(/^User clicked on "Корзина" icon1$/, async () => {
        await ozByPage.clickOnShopBasket();
    });


    this.Then(/^"Корзина" page  was opened with any product$/, async () => {
        await ozByPage.openedBasketPageResult();
    });


    this.Then(/^User check selected product checkbox$/, async () => {
        await ozByPage.checkBoxClick();
    });


    this.Then(/^Checkbox must be checked$/, async () => {
        await ozByPage.checkboxCheck();
    });





    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^Homepage oz.by was opened9$/, async () => {
        await ozByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email9$/, async () => {
        await ozByPage.LogIn();
    });

    this.Then(/^User clicked on "Корзина" icon2$/, async () => {
        await ozByPage.clickOnShopBasket();
    });


    this.Then(/^"Корзина" page  was opened$/, async () => {
        await ozByPage.openedBasketPageResult();

    });

    this.Then(/^Click on OzBy logo$/, async () => {
        await ozByPage.сlickOnOzByLogo();
    });


    this.Then(/^User was redirected back to main page$/, async () => {
        await ozByPage.redirectToMainResult();
    });






    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Homepage oz.by was opened10$/, async () => {
        await ozByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email10$/, async () => {
        await ozByPage.LogIn();
    });

    this.Then(/^Move cursor to "Книги"$/, async () => {
        await ozByPage.moveCursorToBooksHover();
    });

    this.Then(/^Select "Зарубежная современная литература" value$/, async () => {
        await ozByPage.foreignLitClick();
    });

    this.Then(/^User redirected to "Зарубежная современная литература" page$/, async () => {
        await ozByPage.openedForeignLitPageResult();
    });


    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Homepage oz.by was opened11$/, async () => {
        await ozByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email11$/, async () => {
        await ozByPage.LogIn();
    });

    this.Then(/^"Зарубежная современная литература" page opened$/, async () => {
        await ozByPage.navigateToForeignLitPage();
    });

    this.Then(/^User clicked on "Еще 5..." ddl$/, async () => {
        await ozByPage.openDDlValues();
    });

    this.Then(/^Value "Листовые" was selected$/, async () => {
        await ozByPage.selectSheetsBookValue();
    });







    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });
    this.Given(/^Homepage oz.by was opened12$/, async () => {
        await ozByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email12$/, async () => {
        await ozByPage.LogIn();
    });

    this.Then(/^Move cursor to "Магазины OZ"$/, async () => {
        await ozByPage.moveCursorToAllOzShops();
    });

    this.Then(/^Select "Логойский тракт"$/, async () => {
        await ozByPage.selectLogoyskiShop();
    });

    this.Then(/^Click "Посмотреть ассортимент"$/, async () => {
        await ozByPage.clickViewProducts();
    });

    this.Then(/^User redirected to specific shop page$/, async () => {
        await ozByPage.navigateToLogoyskiShopPage();

    });




    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });
    this.Given(/^Homepage oz.by was opened13$/, async () => {
        await ozByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email13$/, async () => {
        await ozByPage.LogIn();
    });

    this.Then(/^User clicked on instagram icon which located on the footer$/, async () => {
        await ozByPage.clickInstIcon();
    });

    this.Then(/^User redirected to oz by instagram page$/, async () => {
        await ozByPage.navigateToOzInstPage();
    });

}