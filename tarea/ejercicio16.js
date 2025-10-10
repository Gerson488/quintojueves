function sumarImpares() {
    let suma = 0;
    const limiteSuma = 500;
    let detenido = false;
    console.log("\nSumando impares del 1 al 50:");
    for (let i = 1; i <= 50; i++) {
        if (suma > limiteSuma) {
            detenido = true;
            break; 
        }
        if (i % 2 !== 0) {
            suma += i;
        }
    }

    if (detenido) {
        console.log(`Proceso detenido: La suma superó ${limiteSuma} (Suma final al detenerse: ${suma}).`);
    } else {
        console.log(`Suma total de impares (del 1 al 50): ${suma}`); 
    }
}
sumarImpares();