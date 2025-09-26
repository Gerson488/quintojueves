function contarPares(arr) {
    let contadorPares = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            contadorPares++;
        }
    }
    return contadorPares;
}
const lista = [1, 2, 3, 4, 5, 6, 7];
console.log(`Hay ${contarPares(lista)} números pares`); 