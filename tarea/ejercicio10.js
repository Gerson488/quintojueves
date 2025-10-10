function tablaDeMultiplicar() {
    const numero = 5; 
    console.log(`\nTabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}
tablaDeMultiplicar();