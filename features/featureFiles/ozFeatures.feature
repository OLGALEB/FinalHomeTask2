@smoke
Feature: OzBY features testing

    #Description: check that user can login via email and password
    Scenario: Sign in to OzBY vua email and password
        Given Homepage oz.by was opened
        Then User log in via email


    Scenario: Open account info page
        #Description: check that user can open a personal page
        Given Homepage oz.by was opened1
        When User log in via email1
        And Click on id link
        Then User was redirected to account info page



    Scenario: Open "Мои отзывы" page from personal account info
        #Description: test that user can open "Мои отзывы" page
        Given Homepage oz.by was opened2
        When User log in via email2
        And Personal info page was opened
        When Click "Мои отзывы" link
        Then User was redirected to review's tab



    Scenario: Back to MainPage from "Мои отзывы" page after OZ logo was clicked
        #Description: test that user can back to main page after he clicked on logo
        Given Homepage oz.by was opened3
        When User log in via email3
        And Personal account info page was opened
        And "Мои отзывы" page was opened
        Then Click on OZ logo
        Then User was redirected main page


    Scenario: Open "Персональная скидка" page from MainPage for registrated user
        #Description: test that user can move cursor to user's nickname and  redirect to "Персональная скидка" page
        Given Homepage oz.by was opened4
        When User log in via email4
        And Move cursor to user's nickname
        And Click "Персональная скидка"
        Then User was redirected to "Персональная скидка" page


    Scenario: Open "Персональная скидка" page from MainPage for registrated user
        #Description: test that user is able to open shop basket
        Given Homepage oz.by was opened5
        When User log in via email5
        When User clicked on "Корзина" icon
        Then "Корзина" page was opened


    Scenario: Delete all products from the "Корзина"
        # Description: test that user is able to delete all products from "Корзина"
        Given Homepage oz.by was opened6
        When User log in via email6
        And User clicked on "Корзина"
        And "Корзина" page  opened
        Then Check "Выбрать все товары" checkbox
        And Checkbox was checked
        Then Click  "Удалить" button
        And CLick "Да,удалить" button
        Then All products are removed



    Scenario: Select any product and and check it in "Корзина"
        # Description: test that user is able to find any product by top search field and put it in "Корзина"
        Given Homepage oz.by was opened7
        When User log in via email7
        When User fill in productName in top search field
        Then Press SEARCH
        Then Press "Положить в корзину"
        Then Click "Уже в корзине"
        Then User redirected to "Корзина" page


    Scenario: Select any product from shop basket via checkbox
        # Description: test that user is able to check selected product checkbox
        Given Homepage oz.by was opened8
        When User log in via email8
        And User clicked on "Корзина" icon1
        And "Корзина" page  was opened with any product
        When User check selected product checkbox
        Then Checkbox must be checked



    Scenario: Back to MainPage via OzBy logo check
        # Description: test that user can back to main page after he clicked on logo
        Given Homepage oz.by was opened9
        When User log in via email9
        And User clicked on "Корзина" icon2
        And "Корзина" page  was opened
        When Click on OzBy logo
        Then User was redirected back to main page


    Scenario: Open "Зарубежная литература" section form the MainPage
        # Description: test that user can open "Зарубежная литература" section form the MainPage
        Given Homepage oz.by was opened10
        When User log in via email10
        And Move cursor to "Книги"
        And Select "Зарубежная современная литература" value
        Then User redirected to "Зарубежная современная литература" page



    Scenario: Select book type value from DDL which located in "Обложка" section
        # Description: test that user can open DDl this book types and select any value
        Given Homepage oz.by was opened11
        When User log in via email11
        And "Зарубежная современная литература" page opened
        Then User clicked on "Еще 5..." ddl
        Then Value "Листовые" was selected


    Scenario: View specific Oz By shop products
        # Description: test that user can check products from specific OzBy shop
        Given Homepage oz.by was opened12
        When User log in via email12
        And Move cursor to "Магазины OZ"
        Then Select "Логойский тракт"
        And Click "Посмотреть ассортимент"
        Then User redirected to specific shop page


        Scenario: Redirect to instagram oz by page after instagram icon was selected 
        # Description: test that user will be redirected to oz by facebook/vk/instagram page after specific icon was clicked
        Given Homepage oz.by was opened13
        When User log in via email13
        And User clicked on instagram icon which located on the footer
        Then User redirected to oz by instagram page
       