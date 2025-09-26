function adivinarNumero() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let adivinado = false;
    let intentos = 0;
    console.log("\nAdivina el número (del 1 al 10)...");
    const intentosSimulados = [5, 8, 3, numeroSecreto]; 
    let indiceIntento = 0;
    while (!adivinado) {
        const intentoUsuario = intentosSimulados[indiceIntento];
        intentos++;
        indiceIntento++;
        if (intentoUsuario === numeroSecreto) {
            adivinado = true;
            console.log(` Adivinaste el número ${numeroSecreto} en ${intentos} intentos.`);
        } else if (intentoUsuario < numeroSecreto) {
            console.log(`Intento ${intentos} (${intentoUsuario}): Demasiado bajo. Intenta de nuevo.`);
        } else {
            console.log(`Intento ${intentos} (${intentoUsuario}): Demasiado alto. Intenta de nuevo.`);
        }
        if (indiceIntento >= intentosSimulados.length && !adivinado) {
             console.log("Error: Se agotaron los intentos simulados.");
             break;
        }
    }
}
adivinarNumero();