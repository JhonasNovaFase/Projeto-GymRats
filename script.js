function adicionarAoCarrinho(produtoId) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(produtoId);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert('Produto adicionado ao carrinho!');
}

function exibirCarrinho() {
    const carrinhoLista = document.getElementById('carrinho-lista');
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.forEach(produtoId => {
        const li = document.createElement('li');
        li.textContent = `Produto: ${produtoId}`;
        carrinhoLista.appendChild(li);
    });
}
function finalizarCompra() {
    alert('Compra finalizada!');
    localStorage.removeItem('carrinho');
    window.location.href = 'index.html';
}

exibirCarrinho();
