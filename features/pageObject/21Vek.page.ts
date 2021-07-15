import { expect } from "chai";
import { browser, ExpectedConditions, Key, promise } from "protractor";
import { protractor } from "protractor/built/ptor";
import { BrowserHacks } from "../../support/browserHacks";
import { Vek21Repo } from "../objectRepository/21Vek.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class Vek21Page {


    vek21Repo: Vek21Repo


    constructor() {
        this.vek21Repo = new Vek21Repo;
    }

    public async clearBrowserData() {
        let browserHacks = new BrowserHacks;
        browserHacks.ClearBrowserData();
    }


    public async navigateTo21Vek() {
        await browser.navigate().to(browser.params.vek21Url);
        await browser.wait(ExpectedConditions.urlIs(browser.params.vek21Url), defaultTimeout, "Timeout error");

    }

    public async clickOnSearchField() {

        await browser.wait(ExpectedConditions.visibilityOf(this.vek21Repo.searchFeild), defaultTimeout, "Timeout error");
        await this.vek21Repo.searchFeild.click()
    }



    public async selectValueFromDDl() {
        await browser.wait(ExpectedConditions.visibilityOf(this.vek21Repo.neededProduct), defaultTimeout, "Timeout error");
        await this.vek21Repo.neededProduct.click();
    }


    public async openedProductPageResult() {

        await browser.wait(ExpectedConditions.urlIs(browser.params.productPage), defaultTimeout, "Timeout error");
    }


    public async navigateToSpecificProductPage() {
        await browser.navigate().to(browser.params.productPage);
        await browser.wait(ExpectedConditions.urlIs(browser.params.productPage), defaultTimeout, "Timeout error");

    }

    public async clickOnPlayButton() {

        await browser.wait(ExpectedConditions.visibilityOf(this.vek21Repo.playButton), defaultTimeout, "Timeout error");
        await this.vek21Repo.playButton.click()
    }

    public async checkOpenedsIFrame() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.vek21Repo.videoIframe), defaultTimeout, "Timeout error");
        await browser.switchTo().frame(this.vek21Repo.videoIframe.getWebElement());

    }

    public async clickOnSupportIcon() {

        await browser.wait(ExpectedConditions.visibilityOf(this.vek21Repo.supportIcon), defaultTimeout, "Timeout error");
        await this.vek21Repo.supportIcon.click()
    }

    public async checkOpenedChat() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.vek21Repo.dialogChat), defaultTimeout, "Timeout error");
        await this.vek21Repo.dialogChat.isDisplayed();
    }

    public async clickOnBasketButton() {

        await browser.wait(ExpectedConditions.visibilityOf(this.vek21Repo.iTemBuyButton), defaultTimeout, "Timeout error");
        await this.vek21Repo.iTemBuyButton.click()
    }


    public async navigateToBasketPage() {
        await browser.navigate().to(browser.params.shopBasket21Vek);
        await browser.wait(ExpectedConditions.urlIs(browser.params.shopBasket21Vek), defaultTimeout, "Timeout error");

    }

    public async checkOrderedProduct() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.vek21Repo.orderedProduct), defaultTimeout, "Timeout error");
        await this.vek21Repo.orderedProduct.isDisplayed();
    }

    public async clickOnArrangeOrder() {

        await browser.wait(ExpectedConditions.visibilityOf(this.vek21Repo.orderButton), defaultTimeout, "Timeout error");
        await this.vek21Repo.orderButton.click()
    }


    public async cardPaymentRadioButtonClick() {
        await browser.wait(ExpectedConditions.presenceOf(this.vek21Repo.creditPayment), defaultTimeout, "Timeout error");
        await browser.executeScript("arguments[0].click();", this.vek21Repo.creditPayment.getWebElement());
        await console.log(await this.vek21Repo.creditPayment.isSelected());
    }

    public async clickOnAccountDDL() {

        await browser.wait(ExpectedConditions.visibilityOf(this.vek21Repo.accountDDL), defaultTimeout, "Timeout error");
        await this.vek21Repo.accountDDL.click()
    }

    public async clickOnViewedProducts() {

        await browser.wait(ExpectedConditions.visibilityOf(this.vek21Repo.viewedProducts), defaultTimeout, "Timeout error");
        await this.vek21Repo.viewedProducts.click()
    }

    public async navigateToViewedProductsPage() {
        await browser.navigate().to(browser.params.viewedProducts);
        await browser.wait(ExpectedConditions.urlIs(browser.params.viewedProducts), defaultTimeout, "Timeout error");

    }

    public async fillInSearchFieldProduct(productName: string): Promise<void> {


        await browser.wait(ExpectedConditions.visibilityOf(this.vek21Repo.searchFeild), defaultTimeout, "Timeout error");
        await this.vek21Repo.searchFeild.sendKeys(productName);
    }


    public async selectProductFromDDL() {
        await browser.wait(ExpectedConditions.visibilityOf(this.vek21Repo.productID), defaultTimeout, "Timeout error");
        await this.vek21Repo.productID.click();
    }


    public async checkViewedProduct() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.vek21Repo.viewedProductName), defaultTimeout, "Timeout error");
        await this.vek21Repo.viewedProductName.isDisplayed();
    }

}