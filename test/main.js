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

export function isPalindrome(palabra) {
  const palabraInvertida = palabra.split("").reverse().join("");
  if (palabra == palabraInvertida) {
    return true;
  } else {
    return false;
  }
}

export function convertTemperature(Celsius) {
  const convertirAFahrenheit = Celsius * 1.8;
  return convertirAFahrenheit + 32;
}
export function generateRandomPassword(longitud) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result1 = " ";
  for (let i = 1; i < longitud; i++) {
    result1 += characters.charAt(Math.floor(Math.random() * characters.length));

  }

  return result1;
}
