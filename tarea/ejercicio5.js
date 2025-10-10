function buscarNombre(nombres, nombreBuscado) {
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] === nombreBuscado) {
            return i;
        }
    }
    return -1;
}
const listaNombres = ["Ana", "Pedro", "Gerson", "Maria"];
const nombre = "Gerson";
const posicion = buscarNombre(listaNombres, nombre);
if (posicion !== -1) {
    console.log(`El nombre ${nombre} se encuentra en la posición: ${posicion}`); 
} else {
    console.log(`El nombre no fue encontrado.`);
}