function login(user, pass) {

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {

            firebase.auth().signInWithEmailAndPassword(user, pass)
                .then(() => {

                    console.log("login realizado com sucesso");

                    window.location.href = "Dashboard.html";

                })
                .catch((error) => {
                    errors(error)

                });

        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            console.error(errorMessage + " Code: " + errorCode);

        });
}

function loginAlternative(user, pass) {

    var db = firebase.firestore();

    var usuario = user;
    var senha = pass;

    db.collection("users").where("login", "==", usuario)
        .get()
        .then((snapshot) => {
            var doc = snapshot.docs[0];

            var email = doc.data().email;

            verificaEhLoja(email, senha);

        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorMessage);
            console.log("Codigo de erro: " + errorCode);

        })
}

function verificaEhLoja(email, pass) {

    var user = email.toLowerCase()

    var db = firebase.firestore();

    db.collection("users").where("email", "==", user)
        .get()
        .then((snapshot) => {
            var doc = snapshot.docs[0];

            var loja = doc.data().loja;

            if (loja) {
                console.log("Usuairo autorizado");
                login(email, pass);
            } else {
                var inputUser = document.querySelector("#user");
                inputUser.value = ""
                inputUser.placeholder = "Usuario não autorizado"
                inputUser.classList.add("campo-vazio");
                alert("Usuario não autorizado")
            }

        }).catch((error) => {
            errors(error)
        })
}

function sair() {
    firebase.auth().signOut().then(function() {

    }).catch(function(error) {
        errors(error);
    });
}

function errors(error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    console.error("Mensagem de erro: ", errorMessage);
    console.error("Codigo de erro: ", errorCode);

    if (errorCode == "auth/wrong-password") {
        let inputPass = document.querySelector("#senha");
        inputPass.value = "";
        inputPass.placeholder = "Senha incorreta";
        inputPass.classList.add("campoInvalido")
    }

}

function usuarioLogado() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("Usuario " + user.email + " logado");
        } else {
            window.location.href = "index.html"
        }
    });
}

/* function getUser() {

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            userInfotmations(user)
        }
    })

}

function userInfotmations(user) {

    var email = user.email;

    var db = firebase.firestore();

    db.collection("users").where("email", "==", email)
        .get()
        .then((snapshot) => {
            console.log(snapshot.docs[0].data().loja);

        })
} */