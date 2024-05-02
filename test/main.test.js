import { test, describe } from "@jest/globals";
import {
  suma,
  dividir,
  CalculadorDeArea,
  addUser,
  isPalindrome,
  convertTemperature,
  generateRandomPassword
} from "./main";
import { expect } from "chai";

test("sumar 1 + 2 es igual a 3", () => {
  expect(suma(1, 2)).to.equal(3);
});

test("divir numero / numero es igual a 5", () => {
  expect(dividir(10, 2)).to.equal(5);
});

describe("Calculador de area ", () => {
  const calculadorDeArea = new CalculadorDeArea();
  test("calcular el area de un cuadrado de 5 x 5  debe dar como resultado 25", () => {
    const result = calculadorDeArea.calculadorDeAreaCuadrado(5);
    expect(result).to.equal(25);
  });
});
describe("Calculador de area ", () => {
  const calculadorDeArea = new CalculadorDeArea();
  test("calcular el area de un cuadrado de 95 x 95  debe dar como resultado 9025", () => {
    const result = calculadorDeArea.calculadorDeAreaCuadrado(95);
    expect(result).to.equal(9025);
  });
});

describe("Calculador de area ", () => {
  const calculadorDeArea = new CalculadorDeArea();
  test("calcular el area de un rectangulo de 2 x 2  debe dar como resultado 8", () => {
    const result = calculadorDeArea.calculadorDeAreaRectangulo(2, 4);
    expect(result).to.equal(8);
  });
});
describe("Calculador de area ", () => {
  const calculadorDeArea = new CalculadorDeArea();
  test("calcular el area de un triangulo de altura 12 y base 20  debe dar como resultado 120", () => {
    const result = calculadorDeArea.calculadorDeAreaTriangulo(12, 20);
    expect(result).to.equal(120);
  });
});

test(" Agregar usuario a la lista", () => {
  const listaUsuarios = [];
  const nuevoUser = {
    id: 1,
    name: "Pedrito",
    email: "pedritopacman123@LaMaquina.com",
  };
  addUser(listaUsuarios, nuevoUser);
  expect(listaUsuarios[listaUsuarios.length - 1]).to.equal(nuevoUser);
});

test("Verificar si una palabra es palindromo, quiere decir si la palabra se puede leer igual de atras para adelante", () => {
  const palabra = "radar";
  expect(isPalindrome(palabra)).to.equal(true);
});

test("convertidor de temperatura, convierta correctamente las temperaturas de Celsius a Fahrenheit.", () => {
  expect(convertTemperature(0)).to.equal(32);
});
test("convertidor de temperatura, convierta correctamente las temperaturas de Celsius a Fahrenheit.", () => {
  expect(convertTemperature(100)).to.equal(212);
});
test("convertidor de temperatura, convierta correctamente las temperaturas de Celsius a Fahrenheit.", () => {
  expect(convertTemperature(-40)).to.equal(-40);
});

test("generateRandomPassword genere contraseñas aleatorias con la longitud correct, que se le pasa por parametro", () => {
  expect(generateRandomPassword(8).length).to.equal(8)
});

test("generateRandomPassword genere contraseñas aleatorias con la longitud correct, que se le pasa por parametro", () => {
  expect(generateRandomPassword(10).length).to.equal(10)
});
