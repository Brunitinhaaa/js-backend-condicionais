let aposentada, portadoraDeDoenca, totalDeRendimentos;

if (portadoraDeDoenca || aposentada) {
    console.log("ISENTA");
} else if (totalDeRendimentos < 28559.70) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
} else {
    console.log("PEGA LEAO");
}