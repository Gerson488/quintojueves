function convertirMayusculas(nombres) {
    const nombresMayusculas = nombres.map(nombre => {
        return nombre.toUpperCase();
    });
    return nombresMayusculas;
}
const nombresMin = ["luis", "carmen", "juan"];
console.log(`Nombres en mayúsculas: ${convertirMayusculas(nombresMin)}`);