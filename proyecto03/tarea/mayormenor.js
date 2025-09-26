function encontrarMayorYMenor(arr) {
    if (arr.length === 0) {
        return { mayor: undefined, menor: undefined };
    }
    let mayor = arr[0];
    let menor = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
        }
        if (arr[i] < menor) {
            menor = arr[i];
        }
    }
    return { mayor: mayor, menor: menor };
}
const nums = [45, 12, 89, 5, 60];
const resultado = encontrarMayorYMenor(nums);
console.log(`El mayor es: ${resultado.mayor} y el menor es: ${resultado.menor}`);