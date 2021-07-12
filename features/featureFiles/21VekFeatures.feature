@smoke
Feature: 21vek feature testing


    #Description: check that user find and select any product
    Scenario: Sign in to 21vek and select any needed available product
        Given Homepage 21vek was opened
        When User click on Search Field
        Then Fill in product name in search field
        And Select specific value form ddl
        Then User redirected to specific product page


    #Description: check opened video Iframe for selected product
    Scenario: Sign in to 21vek and open any available video iFrame
        Given Specific product page was opened
        When User click on PLAY button
        Then Video iFrame was opened


    #Description: check that user can open support dialog chat
    Scenario: Sign in to 21vek and open support chat
        Given Specific product page was opened1
        When User click on support icon
        Then Support Dialog window was opened


    #Description: check that user can select payment method for ordered product
    Scenario: Select any available payment method for ordered product via radio button
        Given Specific product page was opened2
        When User click on "В корзину" button
        Then User opens a shop basket page
        And Selected product is presented
        Then User click "Оформить заказ"
        And Any payment method was selected


    #Description: check that user can redirect to viewed products form Account ddl
    Scenario: Click on Accont ddl, select "Просмотренные" and redirect to viewed products
        Given Homepage 21vek was opened1
        When User click on Search Field1
        Then Fill in "Стул"
        And Select product value form ddl
        Then User click on Account ddl
        And Select "Просмотренные"
        Then Viewed products page was opened
        And User sees selected item