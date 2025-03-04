// Función que suma dos números
const sum = (a, b) => {
    return a + b;
};

// Solo un registro en consola para nosotros
console.log(sum(7, 3));

// Tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // Japan Yen
    "USD": 1.07,  // US Dollar
    "GBP": 0.87   // British Pound
};

// Función para convertir de euros a dólares
const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
};

// Función para convertir de dólares a yenes
const fromDollarToYen = (dollars) => {
    let euros = dollars / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
};

// Función para convertir de yenes a libras
const fromYenToPound = (yen) => {
    let euros = yen / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
};

// Exportamos todas las funciones correctamente en un solo `module.exports`
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
