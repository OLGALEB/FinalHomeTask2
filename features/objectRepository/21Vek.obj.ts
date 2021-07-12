
import { by, element, ElementFinder } from "protractor";

export class Vek21Repo {

    readonly searchFeild: ElementFinder = element(by.xpath('//input[@data-ga_category="Search"]'));

    readonly neededProduct: ElementFinder = element(by.xpath('//li[@id="536116"]'));

    readonly playButton: ElementFinder = element(by.xpath('//a[@class="i-big_video j-ga_track"]'));

    readonly videoIframe: ElementFinder = element(by.xpath('//iframe[@src="https://www.youtube.com/embed/-2puAMF3W_E"]'));

    readonly supportIcon: ElementFinder = element(by.xpath('//i[@class="lt-icon"]'));

    readonly dialogChat: ElementFinder = element(by.xpath('//div[contains(@class,"lt-chat-body-event")]'));

    readonly iTemBuyButton: ElementFinder = element(by.xpath('//div[@class="item-buy"]'));

    readonly orderedProduct: ElementFinder = element(by.xpath('//a[contains(text(),"Видеоняня Moonybaby 55933")]'));

    readonly orderButton: ElementFinder = element(by.xpath('//button[@data-ga_label="Goto_Step2"]'));

    readonly creditPayment: ElementFinder = element(by.xpath('//input[@id="credit"]'));

    readonly accountDDL: ElementFinder = element(by.xpath('//button[@class="styles_userToolsToggler__imcSl"]'));

    readonly viewedProducts: ElementFinder = element(by.xpath('//div[contains(text(),"Просмотренные")]'));

    readonly productID: ElementFinder = element(by.xpath('//li[@id="453960"]'));

    readonly viewedProductName: ElementFinder = element(by.xpath('//span[contains(text(),"Стул Ikea Адде 603.608.67")]'));

    readonly currentCityButton: ElementFinder = element(by.xpath('//button[@class="styles_localityBtn__3_asA"]'));

    readonly cityFillInField: ElementFinder = element(by.xpath('//input[@label="Населенный пункт"]'));

    readonly specificCity: ElementFinder = element(by.xpath('//div[contains(text(),"г. Гродно")]'));

    readonly saveCityButton: ElementFinder = element(by.xpath('//button[contains(text(),"Сохранить")]'));

    readonly selectedCityDispl: ElementFinder = element(by.xpath('//span[contains(text(),"г. Гродно")]'));

};