let jogada1, jogada2;

if (jogada1 === jogada2) {
    console.log("empate");
} else if (((jogada1 === "pedra") && (jogada2 === "tesoura")) || ((jogada1 === "tesoura") && (jogada2 === "pedra"))) {
    console.log("pedra");
} else if (((jogada1 === "pedra") && (jogada2 === "papel")) || ((jogada1 === "papel") && (jogada2 === "pedra"))) {
    console.log("papel");
} else {
    console.log("tesoura");
}

