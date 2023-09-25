let idade, possuiPatologia, altura, ehEstudante;

if (idade < 12 || idade > 65 || possuiPatologia || altura < 1.50) {
    console.log("ACESSO NEGADO");
} else if (ehEstudante || idade < 18) {
    console.log("10 reais");
} else {
    console.log("20 reais");
}