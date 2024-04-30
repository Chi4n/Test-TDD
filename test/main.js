export function suma(a, b) {
  const result = a + b;
  return result;
}

export function dividir(a, b) {
  return a / b;
}

//Calculador de area

export class CalculadorDeArea {
  calculadorDeAreaCuadrado(lado) {
    return lado * lado;
  }
  calculadorDeAreaRectangulo(ancho, altura) {
    return ancho * altura;
  }
  calculadorDeAreaTriangulo(base, altura) {
    return (base * altura) / 2;
  }
}
export function addUser(ListUser, newUser) {
  ListUser.push(newUser);
}
