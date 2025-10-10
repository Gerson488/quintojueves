function mostrarMenu() {
    let opcion;
    console.log("\n--- Sistema de Menú ---");
    const elecciones = [1, 2, 4]; 
    let indice = 0;
    do {
        opcion = elecciones[indice];
        indice++;
        console.log("\nElige una opción:");
        console.log("1. Ver perfil");
        console.log("2. Ver mensajes");
        console.log("3. Configuración");
        console.log("4. Salir");
        console.log(`> Opción seleccionada (Simulada): ${opcion}`);
        switch (opcion) {
            case 1:
                console.log("Mostrando perfil...");
                break;
            case 2:
                console.log("Mostrando mensajes...");
                break;
            case 3:
                console.log("Abriendo configuración...");
                break;
            case 4:
                console.log("Saliendo del programa. ¡Adiós!");
                break;
            default:
                console.log("Opción no válida. Inténtalo de nuevo.");
        } 
    } while (opcion !== 4);
}
mostrarMenu();