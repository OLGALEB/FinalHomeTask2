
import { by, element, ElementFinder } from "protractor";

export class OzByRepo {

    readonly logInButton: ElementFinder = element(by.xpath('//span[contains(text(),"Войти")]'));

    readonly emailRegLink: ElementFinder = element(by.xpath('//a[@id="loginFormLoginEmailLink"]'));

    readonly emailInputField: ElementFinder = element(by.xpath('//div[@class = "i-input-group__cell"]//input[@placeholder="Электронная почта"]'));

    readonly passwordInputField: ElementFinder = element(by.xpath('//input[@placeholder = "Пароль"]'));

    readonly submitLogInDataButton: ElementFinder = element(by.xpath('//button[contains(text(),"Войти")]'));

    readonly userInfoLink: ElementFinder = element(by.xpath('//span[contains(text(),"oz16389094")]'));

    readonly myRewiewLink: ElementFinder = element(by.xpath('//a[contains(text(),"Мои отзывы")]'));

    readonly ozLogo: ElementFinder = element(by.xpath('//a[@class = "top-panel__logo__item "]'));

    readonly personalDiscount: ElementFinder = element(by.xpath('//span[contains(text(),"Персональная скидка")]'))

    readonly personalTabLink: ElementFinder = element(by.xpath('//span[contains(text(),"Персональный раздел")]'))
     
    readonly shopBasket: ElementFinder = element(by.xpath(' //li[@class="top-panel__userbar__li top-panel__userbar__cart"]'));
//a[@class="top-panel__userbar__cart__item"]
   
    readonly topSearch: ElementFinder = element(by.xpath('//input[@id="top-s"]'));

    readonly searchButton: ElementFinder = element(by.xpath('//button[@class="top-panel__search__btn"]'));

    readonly putInBasketButton: ElementFinder = element(by.xpath('//button[@type="submit" and @class="b-product-control__button i-button i-button_large i-button_orange addtocart-btn first-button"]'));
    //span[contains(text(),"Положить")]'

    readonly alreadyInBasket: ElementFinder = element(by.xpath('//span[contains(text(),"Уже")]'));

    readonly bookCheckBox: ElementFinder = element(by.xpath('//input[@value="101004473"]'));

    readonly persоnalDiscountLink: ElementFinder = element(by.xpath('//p[@class="uc-allprops"]'));

    readonly allProductsCheckBox: ElementFinder = element(by.xpath('//input[@class="i-checkbox__real checkAll"]'));

    readonly removeAllButton: ElementFinder = element(by.xpath('//button[@class="i-button i-button_danger i-button_small remove"]'));

    readonly removeSubmit: ElementFinder = element(by.xpath('//button[contains(text(),"Да, удалить")]'));

    readonly booksHover: ElementFinder = element(by.xpath('//a[@class= "menu-link-action main-nav__list__item " and contains(text(),"Книги")]'));

    readonly foreignLit: ElementFinder = element(by.xpath('//a[@href="/books/topic1602.html"]'));

    readonly optionsDDl: ElementFinder = element (by.xpath('//span[@id="fm-input-s-ti3"]'));

    readonly listPage: ElementFinder = element (by.xpath('//a[@class="link-facet-bot" and contains(text(),"Листовое издание")]'));


    readonly price1: ElementFinder = element(by.xpath('//input[@id="inp1_r_cost"]'));

    readonly remove: ElementFinder = element(by.xpath('//span[@class="filters__title__item" and contains(text(),"Цена")]/../..//span[@class="fm-clear-link trash"]'));
    
    
    readonly allOzShops: ElementFinder = element(by.xpath('//li[@id="storesTab"]'));

    readonly logoyskiShop: ElementFinder = element(by.xpath('//a[@data-location="logoyskiy_trakt_37" and @style="display: block;"]'));

    readonly viewAllProducts: ElementFinder = element(by.xpath('//a[@class="b-map-balloon__button"]'));

    readonly instIcon: ElementFinder = element(by.xpath('//a[@href="https://www.instagram.com/myozby/"]'));
}