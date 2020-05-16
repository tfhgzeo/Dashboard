function uplodadImg(produto) {

    var produtoObject = produto;

    var fieldImg = document.querySelector("#image");

    var file = fieldImg.files[0];

    var metadata = { contentType: file.type }

    var storageRef = firebase.storage().ref('produtosImg/' + file.name);

    var task = storageRef.put(file, metadata);

    task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then((url) => {
            produtoObject.img = url;

            cadastraProduto(produtoObject);

        }).catch((error) => console.error(error));

}