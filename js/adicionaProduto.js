function adicionaProduto(produto, informacoes, preco, img, id) {

    var lista = document.querySelector(".lista");

    var divProduto = document.createElement("div");
    divProduto.classList.add("produto");
    divProduto.id = id;

    var imgProduto = document.createElement("img");
    imgProduto.id = "imgProduto";
    imgProduto.src = img;

    var nomeProduto = document.createElement("label");
    nomeProduto.id = "nomeProduto";
    nomeProduto.textContent = produto;

    var informacoesProduto = document.createElement("label");
    informacoesProduto.id = "informacoesProduto";
    informacoesProduto.textContent = informacoes;

    var precoProduto = document.createElement("label")
    precoProduto.id = "precoProduto";
    precoProduto.textContent = "R$ " + preco;

    divProduto.appendChild(imgProduto)
    divProduto.appendChild(nomeProduto)
    divProduto.appendChild(informacoesProduto)
    divProduto.appendChild(precoProduto)

    lista.appendChild(divProduto)

    divProduto.addEventListener("click", () => {
        window.location.href = "produto.html?id=" + id;
    })
}