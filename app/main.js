let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosAPI();

async function getBuscarLivrosAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    let livrosComDesconto =  aplicarDesconto(livros);
    exibirLivros(livrosComDesconto);
    console.table(livros);
}
