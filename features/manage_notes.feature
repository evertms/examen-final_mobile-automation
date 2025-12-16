Feature: Manejar nota

  @Inciso1
  Scenario: Agregar una nueva nota y modificar el título
    Given que agrego una nota con el titulo "hola" y la descripcion "1234"
    When modifico el titulo de la nota a "examen final"
    Then el título de la nota debe ser "examen final"

  @Inciso2
  Scenario: Crear nota rápida y nota normal y modificarlas
    Given que agrego una nota rapida con titulo "Nota Rapida" y descripcion "1111"
    And continuo agregando una nota normal con titulo "Nota Normal" y descripcion "2222"
    When modifico la nota "Nota Rapida" a "Nota Rapida Modificada"
    And modifico la nota "Nota Normal" a "Nota Normal Modificada"
    Then el título de la nota debe ser "Nota Normal Modificada"
    And existe una nota con el titulo "Nota Rapida Modificada"

  @Inciso3
  Scenario: Crear 2 notas rápidas y 2 notas normales y eliminarlas
    Given que agrego una nota rapida con titulo "Rapida 1" y descripcion "R1"
    And continuo agregando una nota rapida con titulo "Rapida 2" y descripcion "R2"
    And continuo agregando una nota normal con titulo "Normal 1" y descripcion "N1"
    And agrego una nota nueva con titulo "Normal 2" y descripcion "N2"
    Then elimino la nota con titulo "Rapida 1"
    And elimino la nota con titulo "Rapida 2"
    And elimino la nota con titulo "Normal 1"
    And elimino la nota con titulo "Normal 2"
    And la nota con titulo "Rapida 1" no debe existir
    And la nota con titulo "Rapida 2" no debe existir
    And la nota con titulo "Normal 1" no debe existir
    And la nota con titulo "Normal 2" no debe existir
