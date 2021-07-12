import { expect } from "chai";
import { browser, ExpectedConditions, Key, promise } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";

import { AmastyRepo } from "../objectRepository/amastyCom.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class AmastyPage {


    amastyRepo: AmastyRepo


    constructor() {
        this.amastyRepo = new AmastyRepo;
    }

    public async clearBrowserData() {
        let browserHacks = new BrowserHacks;
        browserHacks.ClearBrowserData();
    }


    public async navigateToAmastyCom() {
        await browser.navigate().to(browser.params.amastyUrl);
        await browser.wait(ExpectedConditions.urlIs(browser.params.amastyUrl), defaultTimeout, "Timeout error");

    }

    public async enterpriseRadioButtonClick() {
        await browser.wait(ExpectedConditions.visibilityOf(this.amastyRepo.enterpriseRadioButton), defaultTimeout, "Timeout error");
        await this.amastyRepo.enterpriseRadioButton.click();
    }

    public async enterpriseRadioButtonCheck() {
        await browser.wait(ExpectedConditions.visibilityOf(this.amastyRepo.enterpriseRadioButton), defaultTimeout, "Timeout error");
        await expect(await this.amastyRepo.enterpriseRadioButton.isSelected()).equal(true);
    }

    public async freePriceCheck() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.amastyRepo.labelFreePrice), defaultTimeout, "Timeout error");
        await this.amastyRepo.labelFreePrice.isDisplayed();
    }

}
