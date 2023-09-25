//tipo de pagamento (dinheiro, credito, debito, cheque).
let tipoDePagamento, valorDoProduto;

if (tipoDePagamento === "credito") {
    valorDoProduto -= valorDoProduto * 0.05;
} else if (tipoDePagamento === "cheque") {
    valorDoProduto -= valorDoProduto * 0.03;
} else {
    valorDoProduto -= valorDoProduto * 0.10;
}

console.log("Valor a ser pago: R$", valorDoProduto.toFixed([2]));


