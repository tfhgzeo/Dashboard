function addComentario(comentario, data, nomeDeUsuario, imgUrl) {

    var divDeComentarios = document.querySelector(".comentarios");


    /* Div de comentario */
    var comentarioArea = document.createElement("div")
    comentarioArea.classList.add("comentarioArea");

    var comentarioDiv = document.createElement("div");
    comentarioDiv.classList.add("comentario");

    var userImg = document.createElement("img");
    userImg.id = "nomeUsuario";
    userImg.src = imgUrl;

    var nomeUsuario = document.createElement("p");
    nomeUsuario.id = "nomeUsuario";
    nomeUsuario.innerText = nomeDeUsuario;

    var brNomeUsuario = document.createElement("br");

    var dataDoComentario = document.createElement("p");
    dataDoComentario.id = "dataHora";
    dataDoComentario.innerText = data;

    var paragrafoDeComentario = document.createElement("div");
    paragrafoDeComentario.classList.add("paragrafoDeComentario");

    var comentarioDoProduto = document.createElement("p");
    comentarioDoProduto.id = "comentario";
    comentarioDoProduto.innerHTML = comentario;

    /* Div de valiação do comentario */
    var avaliacao = document.createElement("div");
    avaliacao.classList.add("avaliacao");

    var like = document.createElement("div");
    like.classList.add("like");
    like.id = "like";

    var likeImg = document.createElement("i");
    likeImg.classList.add("fas");
    likeImg.classList.add("fa-thumbs-up")
    likeImg.id = "like";


    var labelLike = document.createElement("label");
    labelLike.for = "like";
    labelLike.innerText = "(0)"

    var brLike = document.createElement("br");

    var dislike = document.createElement("div");
    dislike.classList.add("dislike");

    var dislikeImg = document.createElement("i");
    dislikeImg.classList.add("fas");
    dislikeImg.classList.add("fa-thumbs-down");
    dislikeImg.id = "dislike";

    var brDIslike = document.createElement("br");
    var labelDislike = document.createElement("label");
    labelDislike.for = "dislike";
    labelDislike.innerText = "(0)"

    /* Div ParagrafoDeComentario */
    paragrafoDeComentario.appendChild(comentarioDoProduto);

    /* DIV ComentarioDiv */
    comentarioDiv.appendChild(userImg);
    comentarioDiv.appendChild(nomeUsuario);
    comentarioDiv.appendChild(brNomeUsuario);
    comentarioDiv.appendChild(dataDoComentario);
    comentarioDiv.appendChild(paragrafoDeComentario);

    /* DIV Like */
    like.appendChild(likeImg);
    like.appendChild(brLike);
    like.appendChild(labelLike);

    /* DIV Dislike */
    dislike.appendChild(dislikeImg);
    dislike.appendChild(brDIslike);
    dislike.appendChild(labelDislike);

    /* DIV Avaliação */
    avaliacao.appendChild(like);
    avaliacao.appendChild(dislike);

    /* DIV comentarioArea */
    comentarioArea.appendChild(comentarioDiv)
    comentarioArea.appendChild(avaliacao)

    console.log(comentarioArea);


    divDeComentarios.appendChild(comentarioArea)

}