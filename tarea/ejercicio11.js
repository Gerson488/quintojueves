function fibonacci() {
    let a = 0;
    let b = 1;
    let c;
    console.log("\nSerie de Fibonacci (Primeros 10):");
    console.log(a); 
    console.log(b); 
    for (let i = 3; i <= 10; i++) {
        c = a + b; 
        console.log(c);
        a = b;
        b = c;
    }
}
fibonacci();