function sumarArray(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}
const numeros = [10, 5, 20, 3];
console.log(`La suma es: ${sumarArray(numeros)}`);