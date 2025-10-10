function ordenarArray(arr) {
    const n = arr.length;
    let intercambio;
    do {
        intercambio = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; 
                intercambio = true;
            }
        }
    } while (intercambio); 
    return arr;
}
const desordenado = [9, 3, 7, 1, 5];
console.log(`Array ordenado: ${ordenarArray(desordenado)}`);