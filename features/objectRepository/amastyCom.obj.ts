
import { by, element, ElementFinder } from "protractor";

export class AmastyRepo {

    readonly enterpriseRadioButton: ElementFinder = element(by.xpath('//input[@class="input" and @tabindex="1"]'));

    readonly labelFreePrice: ElementFinder = element(by.xpath('//span[contains(text(),"Free") and @data-role="priority-service-price"]'));
};