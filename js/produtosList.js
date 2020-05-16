onLoadFunction();

usuarioLogado();

var voltar = document.querySelector(".voltar");
voltar.addEventListener("click", () => {
    window.location.href = "Dashboard.html"
})

var addProduto = document.querySelector(".addProduto");
addProduto.addEventListener("click", () => {
    window.location.href = "addProdutos.html"
})


firebase.auth().onAuthStateChanged(function(user) {
    buscaProdutos(user);
});