

import { BrowserHacks } from "../../support/browserHacks";
import { ozByPage } from "../pageObject/ozBy.page";


export = function exampleSteps() {


    const OzByPage = new ozByPage;

    this.setDefaultTimeout(700 * 1000);

    let browserHacks = new BrowserHacks;

    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Homepage oz.by was opened$/, async () => {
        await OzByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email$/, async () => {
        await OzByPage.LogIn();
    });



    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Homepage oz.by was opened1$/, async () => {
        await OzByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email1$/, async () => {
        await OzByPage.LogIn();
    });

    this.Then(/^Click on id link$/, async () => {
        await OzByPage.clickOnUserInfoLink();
    });


    this.Then(/^User was redirected to account info page$/, async () => {
        OzByPage.personalAccountInfoResult();
    });


    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Homepage oz.by was opened2$/, async () => {
        await OzByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email2$/, async () => {
        await OzByPage.LogIn();
    });

    this.Then(/^Personal info page was opened$/, async () => {
        await OzByPage.clickOnUserInfoLink();
    });


    this.Then(/^Click "Мои отзывы" link$/, async () => {
        await OzByPage.redirectToMyReview();
    });

    this.Then(/^User was redirected to review's tab$/, async () => {
        await OzByPage.redirectToMyReviewResult();
    });



    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Homepage oz.by was opened3$/, async () => {
        await OzByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email3$/, async () => {
        await OzByPage.LogIn();
    });

    this.Then(/^Personal account info page was opened$/, async () => {
        await OzByPage.clickOnUserInfoLink();
    });

    this.Then(/^"Мои отзывы" page was opened$/, async () => {
        await OzByPage.redirectToMyReview();
    });

    this.Then(/^Click on OZ logo$/, async () => {
        await OzByPage.сlickOnOzByLogo();
    });

    this.Then(/^User was redirected main page$/, async () => {
        await OzByPage.redirectToMainResult();
    });



    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Homepage oz.by was opened4$/, async () => {
        await OzByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email4$/, async () => {
        await OzByPage.LogIn();
    });

    this.Then(/^Move cursor to user's nickname$/, async () => {
        await OzByPage.moveCursorToPersonalNick();
    });

    this.Then(/^Click "Персональная скидка"$/, async () => {
        await OzByPage.clickOnPersonalDiscount();
    });

    this.Then(/^User was redirected to "Персональная скидка" page$/, async () => {
        await OzByPage.redirectToDiscountPageResult();
    });




    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Homepage oz.by was opened5$/, async () => {
        await OzByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email5$/, async () => {
        await OzByPage.LogIn();
    });


    this.Then(/^User clicked on "Корзина" icon$/, async () => {
        await OzByPage.clickOnShopBasket();
    });


    this.Then(/^"Корзина" page was opened$/, async () => {
        await OzByPage.openedBasketPageResult();
    });





    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^Homepage oz.by was opened6$/, async () => {
        await OzByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email6$/, async () => {
        await OzByPage.LogIn();
    });

    this.Then(/^User clicked on "Корзина"$/, async () => {
        await OzByPage.clickOnShopBasket();
    });


    this.Then(/^"Корзина" page  opened$/, async () => {
        await OzByPage.openedBasketPageResult();
    });

    this.Then(/^Check "Выбрать все товары" checkbox$/, async () => {
        await OzByPage.allCheckBoxClick();
    });

    this.Then(/^Checkbox was checked$/, async () => {
        await OzByPage.allCheckboxCheck();
    });

    this.Then(/^Click  "Удалить" button$/, async () => {
        await OzByPage.removeAllProductsCheck();
    });

    this.Then(/^CLick "Да,удалить" button$/, async () => {
        await OzByPage.removeSubmit();
    });

    this.Then(/^All products are removed$/, async () => {
        await OzByPage.openedBasketPageResult();
    });







    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });



    this.Given(/^Homepage oz.by was opened7$/, async () => {
        await OzByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email7$/, async () => {
        await OzByPage.LogIn();
    });

    this.Then(/^User fill in productName in top search field$/, async () => {
        await OzByPage.fillinTopSearch();
    });


    this.Then(/^Press SEARCH$/, async () => {
        await OzByPage.pressSearch();
    });

    this.Then(/^Press "Положить в корзину"$/, async () => {
        await OzByPage.putInBasketClick();
    });

    this.Then(/^Click "Уже в корзине"$/, async () => {
        await OzByPage.clickAlreadyInTheBasketButton();
    });

    this.Then(/^User redirected to "Корзина" page$/, async () => {
        await OzByPage.openedBasketPageResult();
    });





    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^Homepage oz.by was opened8$/, async () => {
        await OzByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email8$/, async () => {
        await OzByPage.LogIn();
    });

    this.Then(/^User clicked on "Корзина" icon1$/, async () => {
        await OzByPage.clickOnShopBasket();
    });


    this.Then(/^"Корзина" page  was opened with any product$/, async () => {
        await OzByPage.openedBasketPageResult();
    });


    this.Then(/^User check selected product checkbox$/, async () => {
        await OzByPage.checkBoxClick();
    });


    this.Then(/^Checkbox must be checked$/, async () => {
        await OzByPage.checkboxCheck();
    });





    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^Homepage oz.by was opened9$/, async () => {
        await OzByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email9$/, async () => {
        await OzByPage.LogIn();
    });

    this.Then(/^User clicked on "Корзина" icon2$/, async () => {
        await OzByPage.clickOnShopBasket();
    });


    this.Then(/^"Корзина" page  was opened$/, async () => {
        await OzByPage.openedBasketPageResult();

    });

    this.Then(/^Click on OzBy logo$/, async () => {
        await OzByPage.сlickOnOzByLogo();
    });


    this.Then(/^User was redirected back to main page$/, async () => {
        await OzByPage.redirectToMainResult();
    });






    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Homepage oz.by was opened10$/, async () => {
        await OzByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email10$/, async () => {
        await OzByPage.LogIn();
    });

    this.Then(/^Move cursor to "Книги"$/, async () => {
        await OzByPage.moveCursorToBooksHover();
    });

    this.Then(/^Select "Зарубежная современная литература" value$/, async () => {
        await OzByPage.foreignLitClick();
    });

    this.Then(/^User redirected to "Зарубежная современная литература" page$/, async () => {
        await OzByPage.openedForeignLitPageResult();
    });


    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^Homepage oz.by was opened11$/, async () => {
        await OzByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email11$/, async () => {
        await OzByPage.LogIn();
    });

    this.Then(/^"Зарубежная современная литература" page opened$/, async () => {
        await OzByPage.navigateToForeignLitPage();
    });

    this.Then(/^User clicked on "Еще 5..." ddl$/, async () => {
        await OzByPage.openDDlValues();
    });

    this.Then(/^Value "Листовые" was selected$/, async () => {
        await OzByPage.selectSheetsBookValue();
    });







    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });
    this.Given(/^Homepage oz.by was opened12$/, async () => {
        await OzByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email12$/, async () => {
        await OzByPage.LogIn();
    });

    this.Then(/^Move cursor to "Магазины OZ"$/, async () => {
        await OzByPage.moveCursorToAllOzShops();
    });

    this.Then(/^Select "Логойский тракт"$/, async () => {
        await OzByPage.selectLogoyskiShop();
    });

    this.Then(/^Click "Посмотреть ассортимент"$/, async () => {
        await OzByPage.clickViewProducts();
    });

    this.Then(/^User redirected to specific shop page$/, async () => {
        await OzByPage.navigateToLogoyskiShopPage();

    });




    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });
    this.Given(/^Homepage oz.by was opened13$/, async () => {
        await OzByPage.navigateToOzBy();
    });

    this.Then(/^User log in via email13$/, async () => {
        await OzByPage.LogIn();
    });

    this.Then(/^User clicked on instagram icon which located on the footer$/, async () => {
        await OzByPage.clickInstIcon();
    });

    this.Then(/^User redirected to oz by instagram page$/, async () => {
        await OzByPage.navigateToOzInstPage();
    });

}