function obtenerPrimerMultiploDeCinco(arr) {
    const primerMultiplo = arr.find(numero => {
        return numero % 5 === 0;
    });
    return primerMultiplo;
}
const valores = [3, 8, 11, 25, 40, 15];
console.log(`Primer múltiplo de 5: ${obtenerPrimerMultiploDeCinco(valores)}`);