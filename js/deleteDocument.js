function deleteDocument(id, colecao) {

    var url = "https://us-central1-promo-76ab5.cloudfunctions.net/deleteDocument?colecao=" + colecao + "&id=" + id;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);

    xhttp.onload = function() {
        console.log(xhttp.status);
    }

    xhttp.send();

    var response = xhttp.responseText;

    return response;
}