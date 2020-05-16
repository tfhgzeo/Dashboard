function cadastraProduto(produto) {

    var nomeProduto = produto.nome;
    var informacoesProduto = produto.informacoes;
    var precoProduto = produto.preco;
    var uid = produto.loja;
    var img = produto.img;

    var db = firebase.firestore();

    db.collection("produtos").add({
        produto: nomeProduto,
        informacoes: informacoesProduto,
        preco: precoProduto,
        loja: uid,
        img: img
    }).then(() => {
        console.log("produto cadastrado com sucesso na coleção de produto");
        console.log("Adicionando relação do produto com a loja");
        alert("Produto cadastrado com Sucesso")
        window.location.href = "produtosList.html"
    }).catch((e) => {
        var errorCode = e.code;
        var errorMessage = e.message;

        console.log(errorMessage);
        console.log("Codigo de erro: ", errorCode);
    })
}

var btnVoltar = document.querySelector(".voltar");
btnVoltar.addEventListener("click", () => {
    window.location.href = "Dashboard.html";
})