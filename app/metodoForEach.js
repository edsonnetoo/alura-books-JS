const secaoLivros = document.getElementById("livros");

function exibirLivros(listaLivros) {
  secaoLivros.innerHTML = "";  
  listaLivros.forEach(livro => {
    // let disponivel = verficaDisponibilidadeLivro(livro);
    let disponivel = livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel";
        secaoLivros.innerHTML += `
            <div class="livro">
      <img class="${disponivel}" src="${livro.imagem}"
        alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `
    });
}

// function verficaDisponibilidadeLivro(livro) {
//   if (livro.quantidade > 0) {
//     return "livro__imagens";
//   } else {
//     return "livro__imagens indisponivel";
//   }
// }