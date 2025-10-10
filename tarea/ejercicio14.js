function validarEntrada() {
    let numero;
    const entradasSimuladas = [-5, 0, 10]; 
    let indice = 0;
    do {
        numero = entradasSimuladas[indice]; 
        indice++;
        if (numero <= 0) {
            console.log(`\nEntrada invalida (${numero}). Por favor, ingrese un número mayor que 0.`);
        }
        if (indice > entradasSimuladas.length && numero <= 0) break; 
    } while (numero <= 0); 
    if (numero > 0) {
        console.log(`\nNúmero válido ingresado: ${numero}`);
    }
}
validarEntrada();