@Checkout
Feature: Completar compra

  Background:
    Given que estoy en la pantalla de login
    When el usuario ingresa user="standard_user"
    And el usuario ingresa password="secret_sauce"
    And el usuario hace click en el boton de login
    Then el usuario debe estar en la pantalla de inventario

  Scenario: Compra exitosa de 2 productos
    When el usuario agrega dos productos al carrito
    And el usuario va al carrito de compras
    And el usuario procede al checkout
    And el usuario ingresa sus datos personales
    And el usuario finaliza la compra
    Then el usuario debe ver la confirmacion de la orden
