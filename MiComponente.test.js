import { mayorDeEdad } from "./MiComponente";

describe("Pruebas de la función mayorDeEdad", () => {
  test("Debe devolver true si es mayor o igual a 18", () => {
    expect(mayorDeEdad(18)).toBe(true);
    expect(mayorDeEdad(30)).toBe(true);
  });

  test("Debe devolver false si la edad es menor a 18", () => {
    expect(mayorDeEdad(17)).toBe(false);
    expect(mayorDeEdad(0)).toBe(false);
  });

  test("Debe devolver null si se ingresa un número negativo", () => {
    expect(mayorDeEdad(-1)).toBe(null);
  });
});
