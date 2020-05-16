function comentario() {
    var produtoId = idDoProduto();

    var db = firebase.firestore();

    db.collection("produtos").doc(produtoId).collection("comentarios")
        .get()
        .then((snapshot) => {
            var docs = snapshot.docs;
            var data, comentario, usuario
            console.log(docs);

            docs.forEach((doc) => {
                comentario = doc.data().comentario;
                data = doc.data().data;
                usuario = doc.data().usuario;

                promise = db.collection("users").where("id", "==", usuario)
                    .get()
                    .then((snapshot) => {
                        var doc = snapshot.docs[0];
                        var imgUrl = doc.data().img;;

                        var nomeDeUsuario = doc.data().nome;

                        var userObj = {
                            nome: nomeDeUsuario,
                            img: imgUrl,
                        }

                        return userObj;
                    })


                continuaComentario(promise, comentario, data);

            })

        })
}

async function continuaComentario(promise, comentario, data) {

    var objeto = await promise
    var img = objeto.img;
    var nomeDeUsuario = objeto.nome;

    addComentario(comentario, data, nomeDeUsuario, img)
}