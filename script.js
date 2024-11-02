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
    alert('Obrigado por comprar na GymRats!');
    localStorage.removeItem('carrinho');
    window.location.href = 'index.html';
}

exibirCarrinho();
function obterCarrinho() {
    return JSON.parse(localStorage.getItem('carrinho')) || [];
}

function atualizarCarrinho(carrinho) {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function existeNoCarrinho(produtoId) {
    const carrinho = obterCarrinho();
    return carrinho.includes(produtoId);
}

function adicionarAoCarrinho(produtoId) {
    if (existeNoCarrinho(produtoId)) {
        alert('Este produto já está no carrinho.');
        return; 
    }

    const carrinho = obterCarrinho();
    carrinho.push(produtoId);
    atualizarCarrinho(carrinho);

    alert(`Produto "${produtoId}" adicionado ao carrinho com sucesso!`);
}


//function adicionarAoCarrinho(produtoId) { 
            //let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
            //carrinho.push(produtoId);
            //localStorage.setItem('carrinho', JSON.stringify(carrinho));
            //alert('Produto adicionado ao carrinho!');
        //}