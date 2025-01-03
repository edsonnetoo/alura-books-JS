const btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");

btnOrdenarPorPreco.addEventListener("click", ordenaLivrosPreco);

function ordenaLivrosPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirLivros(livrosOrdenados);
}