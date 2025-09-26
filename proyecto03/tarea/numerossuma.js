function sumarPositivos(arr) {
    let suma = 0;
    for (const numero of arr) {
        if (numero > 0) {
            suma += numero;
        }
    }
    return suma;
}
const datos = [10, -5, 20, -1, 3];
console.log(`Suma de positivos: ${sumarPositivos(datos)}`); 