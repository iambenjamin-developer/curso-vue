describe('Example Component', () => {

  test('Debe de ser mayor a 10', () => {

    //Arrange
    let value = 15;

    //Act
    value = value + 2;

    //Assert
    if (value > 10) {
      // todo bien
    } else {
      throw `${value} no es mayor a 10`
    }
  })

})