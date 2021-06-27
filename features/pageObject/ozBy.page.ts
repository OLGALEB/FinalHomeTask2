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
        await browser.wait(ExpectedConditions.visibilityOf(this.ozByrepo.logInButton), defaultTimeout, "jfdlskhjvs");
        await this.ozByrepo.logInButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(this.ozByrepo.emailRegLink), defaultTimeout, "jfdlskhjvs");
        await this.ozByrepo.emailRegLink.click();
        await browser.wait(ExpectedConditions.visibilityOf(this.ozByrepo.emailInputField), defaultTimeout, "jfdlskhjvs");
        await this.ozByrepo.emailInputField.sendKeys(email);
        await browser.wait(ExpectedConditions.visibilityOf(this.ozByrepo.passwordInputField), defaultTimeout, "jfdlskhjvs");
        await this.ozByrepo.passwordInputField.sendKeys(password);
        await this.ozByrepo.submitLogInDataButton.click();
        await browser.wait(ExpectedConditions.urlIs(browser.params.ozbyUrl), defaultTimeout, "Timeout error");
    }



    public async clickOnUserInfoLink() {
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

            // await browser.wait(ExpectedConditions.visibilityOf(await this.ozByrepo.bookCheckBox), defaultTimeout, "Checkbox has incorrect locator");
            // await browser.actions().mouseMove(this.ozByrepo.bookCheckBox).perform();
        }
        //await this.ozByrepo.bookCheckBox.click();
    }

    public async checkboxCheck() {

        await expect(await this.ozByrepo.bookCheckBox.isSelected()).equal(true);
        // await browser.actions().click(this.ozByrepo.bookCheckBox).perform();
        // await browser.sleep(2000);
        // await this.ozByrepo.bookCheckBox.isSelected();
    }


    public async allCheckBoxClick() {

        await this.ozByrepo.allProductsCheckBox.click();

        // await browser.wait(ExpectedConditions.visibilityOf(await this.ozByrepo.bookCheckBox), defaultTimeout, "Checkbox has incorrect locator");
        // await browser.actions().mouseMove(this.ozByrepo.bookCheckBox).perform();
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


    public async foreignLitClick () {
        await this.ozByrepo.foreignLit.click();
    }


    public async openedForeignLitPageResult() {
        await browser.wait(ExpectedConditions.urlIs(browser.params.foreignLitUrl), defaultTimeout, "Timeout error");

    }
   




    // public async clickHomeProductsDDL() {

    //     await browser.wait(ExpectedConditions.presenceOf(this.ozByrepo.homeProductsDDL), defaultTimeout, "Timeout error");
    //     await this.ozByrepo.homeProductsDDL.click();
    // }

    // public async clickOnProductsForAnimal() {

    //     await this.ozByrepo.productsForAnimalsValue.click();

    // }

    // public async openedAnimalProductsPageResult() {
    //     await browser.wait(ExpectedConditions.urlIs(browser.params.petsUrl), defaultTimeout, "Timeout error");

    // }


}












/*     public async unckeckAvailableCheckBox (){
//await expect(await this.ozByrepo.bookCheckBox.isSelected()).equal(true);
        await browser.wait(ExpectedConditions.visibilityOf(await this.ozByrepo.availableCheckBoxID), defaultTimeout, "Checkbox has incorrect locator");
        await browser.actions().mouseMove(this.ozByrepo.availableCheckBoxID).perform();
    }
// await browser.actions().click(this.ozByrepo.bookCheckBox).perform();
            // await browser.sleep(2000);
            // await this.ozByrepo.bookCheckBox.isSelected();

public async Click (){
    await browser.actions().click(this.ozByrepo.availableCheckBoxID).perform();
    await browser.sleep(2000);
    await this.ozByrepo.availableCheckBoxID.isSelected();
} */


















 // public async clickAiroTransferLink() {
    //     await this.headerRepo.airoTransfer.click();
    // }

    // public async checkOpenedTransferPage() {

    //     //await browser.navigate().to(browser.params.transferSite);
    //     await browser.wait(ExpectedConditions.urlIs(browser.params.transferSite), defaultTimeout, "Timeout error");
    // }   