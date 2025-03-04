// Importamos todas las funciones desde app.js
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require("./app.js");

// Prueba de suma
test("adds 14 + 9 to equal 23", () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// Prueba para convertir euros a dólares
test("Convertir 1 euro a dólares debe ser 1.07", () => {
    expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
});

// Prueba para convertir dólares a yenes
test("Convertir 1 dólar a yenes debe ser aproximadamente 146.26", () => {
    expect(fromDollarToYen(1)).toBeCloseTo((1 / 1.07) * 156.5);
});

// Prueba para convertir yenes a libras
test("Convertir 1 yen a libras debe ser aproximadamente 0.00556", () => {
    expect(fromYenToPound(1)).toBeCloseTo((1 / 156.5) * 0.87);
});
