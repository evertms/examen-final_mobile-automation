@Login
Feature: Login

  Background:
    Given que estoy en la pantalla de login

  Scenario: Login y logout exitoso
    When el usuario ingresa user="standard_user"
    And el usuario ingresa password="secret_sauce"
    And el usuario hace click en el boton de login
    And el usuario abre el menu lateral
    And el usuario hace click en logout
    Then el usuario debe estar en la pantalla de login
