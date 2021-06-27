import { expect } from "chai";
import { browser, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { ozByRepo } from "../objectRepository/ozByObject.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class ozByPage {


    ozByrepo: ozByRepo


    constructor() {
        this.ozByrepo = new ozByRepo;
    }

    public async clearBrowserData() {
        let browserHacks = new BrowserHacks;
        browserHacks.ClearBrowserData();
    }


    public async navigateToOzBy() {
        await browser.navigate().to(browser.params.ozbyUrl);
        await browser.wait(ExpectedConditions.urlIs(browser.params.ozbyUrl), defaultTimeout, "Timeout error");

    }

    public async LogIn() {
        let email = "lebedevaolga021@gmail.com";
        let password = "IfXJN3";
        await browser.wait(ExpectedConditions.visibilityOf(this.ozByrepo.logInButton), defaultTimeout, "Timeout error");
        await this.ozByrepo.logInButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(this.ozByrepo.emailRegLink), defaultTimeout, "Timeout error");
        await this.ozByrepo.emailRegLink.click();
        await browser.wait(ExpectedConditions.visibilityOf(this.ozByrepo.emailInputField), defaultTimeout, "Timeout error");
        await this.ozByrepo.emailInputField.sendKeys(email);
        await browser.wait(ExpectedConditions.visibilityOf(this.ozByrepo.passwordInputField), defaultTimeout, "Timeout error");
        await this.ozByrepo.passwordInputField.sendKeys(password);
        await this.ozByrepo.submitLogInDataButton.click();
        await browser.wait(ExpectedConditions.urlIs(browser.params.ozbyUrl), defaultTimeout, "Timeout error");
    }



    public async clickOnUserInfoLink() {
        await browser.wait(ExpectedConditions.visibilityOf(this.ozByrepo.userInfoLink), defaultTimeout, "Timeout error");
        await this.ozByrepo.userInfoLink.click();


    }

    public async personalAccountInfoResult() {
        await browser.wait(ExpectedConditions.urlIs(browser.params.personalPage), defaultTimeout, "Timeout error");

    }

    public async redirectToMyReview() {
        await this.ozByrepo.myRewiewLink.click();
    }

    public async redirectToMyReviewResult() {
        await browser.wait(ExpectedConditions.urlIs(browser.params.myReviewsTab), defaultTimeout, "Timeout error");

    }

    public async сlickOnOzByLogo() {
        await this.ozByrepo.ozLogo.click();
    }

    public async redirectToMainResult() {
        await browser.wait(ExpectedConditions.urlIs(browser.params.ozbyUrl), defaultTimeout, "Timeout error");

    }

    public async moveCursorToPersonalNick() {
        await browser.actions().mouseMove(this.ozByrepo.userInfoLink).perform();
    }

    public async clickOnPersonalDiscount() {
        await this.ozByrepo.personalDiscount.click();
    }

    public async redirectToDiscountPageResult() {
        await browser.wait(ExpectedConditions.urlIs(browser.params.personalDiscountTab), defaultTimeout, "Timeout error");

    }


    public async clickDiscountLink() {
        await browser.wait(ExpectedConditions.visibilityOf(this.ozByrepo.persоnalDiscountLink), defaultTimeout, "Timeout error");
        await this.ozByrepo.persоnalDiscountLink.click();

    }

    public async clickToPersonalTabLink() {
        await this.ozByrepo.personalTabLink.click();
    }

    public async clickOnShopBasket() {
        await browser.wait(ExpectedConditions.presenceOf(this.ozByrepo.shopBasket), defaultTimeout, "Timeout error");
        await this.ozByrepo.shopBasket.click();
    }


    public async openedBasketPageResult() {
        await browser.wait(ExpectedConditions.urlIs(browser.params.shopBasket), defaultTimeout, "Timeout error");

    }

    public async fillinTopSearch() {
        let productName = "Typescript быстро";
        await this.ozByrepo.topSearch.sendKeys(productName);
    }

    public async pressSearch() {
        await this.ozByrepo.searchButton.click();
    }

    public async putInBasketClick() {

        await this.ozByrepo.putInBasketButton.click();

    }




    public async clickAlreadyInTheBasketButton() {
        await this.ozByrepo.alreadyInBasket.click();
    }

    public async checkBoxClick() {
        {
            await this.ozByrepo.bookCheckBox.click();


        }

    }

    public async checkboxCheck() {

        await expect(await this.ozByrepo.bookCheckBox.isSelected()).equal(true);

    }


    public async allCheckBoxClick() {

        await this.ozByrepo.allProductsCheckBox.click();

    }


    public async allCheckboxCheck() {

        await expect(await this.ozByrepo.allProductsCheckBox.isSelected()).equal(true);

    }


    public async removeAllProductsCheck() {

        await this.ozByrepo.removeAllButton.click();

    }

    public async removeSubmit() {

        await this.ozByrepo.removeSubmit.click();

    }


    public async moveCursorToBooksHover() {
        await browser.actions().mouseMove(this.ozByrepo.booksHover).perform();
    }


    public async foreignLitClick() {
        await this.ozByrepo.foreignLit.click();
    }


    public async openedForeignLitPageResult() {
        await browser.wait(ExpectedConditions.urlIs(browser.params.foreignLitUrl), defaultTimeout, "Timeout error");

    }


    public async navigateToForeignLitPage() {
        await browser.navigate().to(browser.params.foreignLitUrl);
        await browser.wait(ExpectedConditions.urlIs(browser.params.foreignLitUrl), defaultTimeout, "Timeout error");

    }

    public async openDDlValues() {
        await browser.wait(ExpectedConditions.presenceOf(this.ozByrepo.optionsDDl), defaultTimeout, "Timeout error");
        await this.ozByrepo.optionsDDl.click();
    }


    public async selectSheetsBookValue() {
        await browser.wait(ExpectedConditions.presenceOf(this.ozByrepo.listPage), defaultTimeout, "Timeout error");
        await this.ozByrepo.listPage.click();
    }


    public async moveCursorToAllOzShops() {
        await browser.actions().mouseMove(this.ozByrepo.allOzShops).perform();
    }

    public async selectLogoyskiShop() {
        await browser.wait(ExpectedConditions.presenceOf(this.ozByrepo.logoyskiShop), defaultTimeout, "Timeout error");
        await this.ozByrepo.logoyskiShop.click();
    }

    public async clickViewProducts() {
        await browser.wait(ExpectedConditions.presenceOf(this.ozByrepo.viewAllProducts), defaultTimeout, "Timeout error");
        await this.ozByrepo.viewAllProducts.click();
    }

    public async navigateToLogoyskiShopPage() {
        await browser.navigate().to(browser.params.logoiskyURL);
        await browser.wait(ExpectedConditions.urlIs(browser.params.logoiskyURL), defaultTimeout, "Timeout error");

    }

    public async clickInstIcon() {
        await this.ozByrepo.instIcon.click();
    }

    public async navigateToOzInstPage() {
        await browser.navigate().to(browser.params.ozbyInst);
        await browser.wait(ExpectedConditions.urlIs(browser.params.ozbyInst), defaultTimeout, "Timeout error");

    }
}