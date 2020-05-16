function buscaProdutos(user) {

    var uid = user.uid;

    var db = firebase.firestore();

    db.collection("produtos").where("loja", "==", uid)
        .get()
        .then((snapshot) => {
            var quantidade = snapshot.docs.length;
            for (var x = 0; x < quantidade; x++) {
                var doc = snapshot.docs[x].data();

                var obj = {
                    produto: doc.produto,
                    informacoes: doc.informacoes,
                    preco: doc.preco,
                    img: doc.img,
                    id: snapshot.docs[x].id,
                }

                console.log(obj);

                adicionaProduto(obj.produto, obj.informacoes, obj.preco, obj.img, obj.id);


            }
            console.log("produtos adicionado com sucesso :)");
        })


}