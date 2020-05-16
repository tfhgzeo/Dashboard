onLoadFunction()


document.addEventListener("DOMContentLoaded", function(event) {

    usuarioLogado();

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {

            var db = firebase.firestore();

            db.collection("users").where("id", "==", user.uid)
                .get()
                .then((snapshot) => {

                    var nomeLoja = document.querySelectorAll("#nomeLoja");
                    var img = document.querySelector(".avatar");

                    for (var x = 0; x < nomeLoja.length; x++) {
                        nomeLoja[x].textContent = snapshot.docs[0].data().nome;
                        img.src = snapshot.docs[0].data().img;
                    }
                })
        }
    })

    var addProdutos = document.querySelector("#addProdutos");
    addProdutos.addEventListener("click", () => {
        window.location.href = "addProdutos.html"
    })

    var produtosList = document.querySelector("#produtosList");
    produtosList.addEventListener("click", () => {
        window.location.href = "produtosList.html";
    })

    var btnSair = document.getElementById("sair");
    btnSair.addEventListener("click", (e) => {
        e.preventDefault();

        sair();

    })



    console.log("DOM completamente carregado e analisado");
});