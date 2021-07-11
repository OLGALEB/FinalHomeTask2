
@smoke
Feature: 21vek feature testing



    #Description: check that user find and select any product
    Scenario: Sign in to 21vek and select any needed available product
        Given Homepage 21vek was opened
        Then User click on Search Field
        And Fill in product name in search field
        And Select specific value form ddl
        Then User redirected to specific product page


    #Description: check opened video Iframe for selected product
    Scenario: Sign in to 21vek and open any available video iFrame
        Given Specific product page was opened
        Then User click on PLAY button
        And Video iFrame was opened


    #Description: check that user can open support dialog chat
    Scenario: Sign in to 21vek and open support chat
        Given Specific product page was opened1
        Then User click on support icon
        And Support Dialog window was opened



    #Description: check that user can open support dialog chat
    Scenario: Sign in to 21vek and open support chat
        Given Specific product page was opened1
        Then User click on support icon
        And Support Dialog window was opened


    
    #Description: check that user can select payment method for ordered product
    Scenario: Select any available payment method for ordered product via radio button
        Given Specific product page was opened2
        Then User click on "В корзину" button
        And User opens a shop basket page
        Then Selected product is presented
        And User click "Оформить заказ"
        Then Any payment method was selected


    #Description: check that user can redirect to viewed products form Account ddl
    Scenario: Click on Accont ddl, select "Просмотренные" and redirect to viewed products
        Given Homepage 21vek was opened1
        Then User click on Search Field1
        And Fill in "Стул"
        And Select product value form ddl
        Then User click on Account ddl
        And Select "Просмотренные"
        Then Viewed products page was opened
        And User sees selected item