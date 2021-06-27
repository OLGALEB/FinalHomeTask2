
import { by, element, ElementFinder } from "protractor";

export class ozByRepo {

    readonly logInButton: ElementFinder = element(by.xpath('//span[contains(text(),"Войти")]'));

    readonly emailRegLink: ElementFinder = element(by.xpath('//a[@id="loginFormLoginEmailLink"]'));

    readonly emailInputField: ElementFinder = element(by.xpath('//div[@class = "i-input-group__cell"]//input[@placeholder="Электронная почта"]'));

    readonly passwordInputField: ElementFinder = element(by.xpath('//input[@placeholder = "Пароль"]'));

    readonly submitLogInDataButton: ElementFinder = element(by.xpath('//button[contains(text(),"Войти")]'));

    readonly userInfoLink: ElementFinder = element(by.xpath('//span[@class="top-panel__userbar__user__name__inner"]'));

    readonly myRewiewLink: ElementFinder = element(by.xpath('//a[contains(text(),"Мои отзывы")]'));

    readonly ozLogo: ElementFinder = element(by.xpath('//a[@class = "top-panel__logo__item "]'));

    readonly personalDiscount: ElementFinder = element(by.xpath('//span[contains(text(),"Персональная скидка")]'))

    readonly personalTabLink: ElementFinder = element(by.xpath('//span[contains(text(),"Персональный раздел")]'))
     
    readonly shopBasket: ElementFinder = element(by.xpath('//a[@class="top-panel__userbar__cart__item"]'));

    readonly topSearch: ElementFinder = element(by.xpath('//input[@id="top-s"]'));

    readonly searchButton: ElementFinder = element(by.xpath('//span[@class="top-panel__search__btn__item"]'));

    readonly putInBasketButton: ElementFinder = element(by.xpath('//span[contains(text(),"Положить")]'));

    readonly alreadyInBasket: ElementFinder = element(by.xpath('//span[contains(text(),"Уже")]'));

    readonly bookCheckBox: ElementFinder = element(by.xpath('//input[@value="101004473"]'));

    readonly persоnalDiscountLink: ElementFinder = element(by.xpath('//p[@class="uc-allprops"]'));

    readonly allProductsCheckBox: ElementFinder = element(by.xpath('//input[@class="i-checkbox__real checkAll"]'));

    readonly removeAllButton: ElementFinder = element(by.xpath('//button[@class="i-button i-button_danger i-button_small remove"]'));

    readonly removeSubmit: ElementFinder = element(by.xpath('//button[contains(text(),"Да, удалить")]'));

    readonly booksHover: ElementFinder = element(by.xpath('//a[@class= "menu-link-action main-nav__list__item " and contains(text(),"Книги")]'));

    readonly foreignLit: ElementFinder = element(by.xpath('//a[contains(text()," Зарубежная современная литература ")]'));

    
    
    
    
    
    //readonly productsForAnimalsValue: ElementFinder = element(by.xpath('//*[@id="dinamic_menu_home"]/div/ul/li[3]/a'));

    //readonly homeProductsDDL: ElementFinder = element (by.xpath('//span[@class="mpgs-cat__link__span"]/..//span[contains(text(),"Каталог товаров для дома")]'));

    //readonly bookCell: ElementFinder = element (by.xpath ('//a[@class="needsclick item-type-card__link item-type-card__link--main"]'));

    //readonly availableCheckBoxID: ElementFinder = element (by.xpath ('//input[@id="availability_3"]'));

}