
@smoke
Feature: Amasty.com  feature testing


    #Description: check that user can select Enterprise Edition radio button
    Scenario: Open amasty.com site and select Enterprise Edition radio button
        Given Amasty.com was opened
        When User click on Enterprise radio button
        Then Enterprise radio button was selected
        And Free price lable is displayed