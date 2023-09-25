const rendaMensalEmCentavos = 15000;
const mesesDecorridos = 12;
const totalJaPagoPeloAluno = 0;

if (mesesDecorridos > 60) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois o tempo decorrido de contrato é maior que 60 meses.");
} else if (rendaMensalEmCentavos < 2000) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.")
} else if (totalJaPagoPeloAluno >= 18000) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a soma das parcelas já pagas pelo aluno nos meses anteriores é igual a 18 mil reais.")
} else {
    console.log("O valor da parcela desse mês é R$", (rendaMensalEmCentavos * 0.18), "reais");
}

