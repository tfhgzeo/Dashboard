function onLoadFunction() {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    console.log("Firebase Carregado");
}