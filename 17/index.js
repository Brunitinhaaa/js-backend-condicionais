const valorDoProduto = 1000;
const quantidadeDoParcelamento = 10;
const valorPago = 300;

if (valorDoProduto !== valorPago) {
    const Resta_m = ((quantidadeDoParcelamento - ((valorPago * quantidadeDoParcelamento) / valorDoProduto)) <= 1 ? "resta" : " restam");
    const Parcela_s = ((quantidadeDoParcelamento - ((valorPago * quantidadeDoParcelamento) / valorDoProduto)) <= 1 ? "parcela" : "parcelas");
    console.log(`${Resta_m} ${(quantidadeDoParcelamento - (valorPago / (valorDoProduto / quantidadeDoParcelamento)))} ${Parcela_s} de R$${(valorDoProduto / quantidadeDoParcelamento).toFixed([2])}`);
} else {
    console.log(`Não ${Resta_m} nenhuma ${Parcela_s}`);
}

