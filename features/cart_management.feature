@Cart
Feature: Gestión del carrito de compras

  Background:
    Given que estoy en la pantalla de login
    When el usuario ingresa user="standard_user"
    And el usuario ingresa password="secret_sauce"
    And el usuario hace click en el boton de login
    Then el usuario debe estar en la pantalla de inventario

  Scenario: Agregar y quitar un producto del carrito
    When el usuario agrega el primer producto al carrito
    And el usuario va al carrito de compras
    Then el usuario debe ver la pantalla del carrito
    And el usuario quita el producto del carrito
    Then el producto ya no debe estar en el carrito
