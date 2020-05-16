onLoadFunction();

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location.href = "Dashboard.html"
    } else {}
});

var btn = document.querySelector("#btnLogin");
btn.addEventListener("click", (e) => {
    e.preventDefault();

    var inputUser = document.querySelector("#user");
    var inputPass = document.querySelector("#senha");

    var user = inputUser.value;
    var pass = inputPass.value;

    if (user.length == 0) {
        inputUser.classList.add("campoInvalido");
        return false;
    } else {
        inputUser.classList.remove("campoInvalido");
    }

    if (pass.length == 0) {
        inputPass.textContent = "";
        inputPass.classList.add("campoInvalido");
        return false;
    } else {
        inputPass.classList.remove("campoInvalido");
    }

    verificaEmail(user, pass);

})

function verificaEmail(user, pass) {

    var usuario = user;
    var senha = pass;

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var verificado = re.test(usuario)

    if (verificado == true) {
        verificaEhLoja(usuario, senha);
    } else {
        loginAlternative(usuario, senha)
    }
}