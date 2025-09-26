function revertirArray(arr) {
    const n = arr.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = temp;
    }
    return arr;
}
const original = [1, 2, 3, 4, 5];
console.log(`Array revertido: ${revertirArray(original)}`);