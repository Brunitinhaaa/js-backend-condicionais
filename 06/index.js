let alturaEmCm;

if (alturaEmCm < 1.80) {
    console.log("REPROVADO");
} else if (alturaEmCm >= 1.80 && alturaEmCm <= 1.85) {
    console.log("LÍBERO");
} else if (alturaEmCm >= 1.86 && alturaEmCm <= 1.95) {
    console.log("PONTEIRO");
} else if (alturaEmCm >= 1.96 && alturaEmCm <= 2.05) {
    console.log("OPOSTO");
} else {
    console.log("CENTRAL");
}