document.addEventListener("DOMContentLoaded", function(event) {
    onLoadFunction();

    usuarioLogado();


    var btnVoltar = document.querySelector(".voltar");
    btnVoltar.addEventListener("click", () => {
        window.location.href = "produtosList.html"
    })

    var btnDelete = document.querySelector("#lixeira");
    btnDelete.addEventListener("click", () => {
        var id = idDoProduto();
        var collection = "produtos"

        var r = confirm("Are you sure you want to delete");

        if (r == true) {
            var response = deleteDocument(id, collection);
            console.log(response);

            if (response == "success") {
                alert("produto deletado com Sucesso")
                window.location.href = document.referrer;
            }

        } else {
            console.log("Foi cancelado");
        }

    })

    informacoes();

    comentario();

})


function informacoes() {

    var id = idDoProduto();

    var db = firebase.firestore();

    var objetoProduto = db.collection("produtos").doc(id)
        .get()
        .then((snapshot) => {
            var obj = {
                nome: snapshot.data().produto,
                preco: snapshot.data().preco,
                img: snapshot.data().img,
                informacoes: snapshot.data().informacoes,
            }
            return obj;
        })

    function Success(objeto) {
        var obj = objeto;
        addInformations(obj);

    }

    function Failure(error) {
        console.log(error);
    }

    objetoProduto.then(Success, Failure);


}

function addInformations(objetoProduto) {
    var nome = objetoProduto.nome;
    var preco = objetoProduto.preco;
    var img = objetoProduto.img;

    var nomeDoproduto = document.getElementById("nomeProduto");
    nomeDoproduto.innerText = nome;

    var precoDoProduto = document.getElementById("precoProduto");
    precoDoProduto.innerText = "R$ " + preco;

    var imgProduto = document.getElementById("imgProduto");
    imgProduto.src = img;
}


function testeDelete() {

    var collection = "produtos";
    var id = "Q06Sa8F2ldtPOJDv2JrW"

    deleteDocument(id, collection);

}