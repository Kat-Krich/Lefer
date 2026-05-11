function mostrarLogin(){
    var telaLog = document.getElementById("Login");
    telaLog.style.display = "flex";
}
function fecharLogin() {
    document.getElementById("Login").style.display = "none";
}

function mostrarCadastro(){
    var telaCad = document.getElementById("Cadastro");
    telaCad.style.display = "flex";
}
function fecharCadastro() {
    document.getElementById("Cadastro").style.display = "none";
}

function mostrarHome(){
    var telaHome = document.getElementById("Home");
    telaHome.style.display = "flex";
}
function fecharHome() {
    document.getElementById("Home").style.display = "none";
}

function mostrarBusca(){
    var telaBus = document.getElementById("Busca");
    telaBus.style.display = "flex";
}
function fecharBusca() {
    document.getElementById("Busca").style.display = "none";
}

function mostrarBusca(){
    var telaBus = document.getElementById("Busca");
    telaBus.style.display = "flex";
}
function fecharBusca() {
    document.getElementById("Busca").style.display = "none";
}

function mostrarMenu(opcaoMenu){
    if (opcaoMenu === "btnBusca") {
        var telaBus = document.getElementById("Busca");
        telaBus.style.display = "flex";
        var telaHome = document.getElementById("Home");
        telaHome.style.display = "none";
        var telaMetas = document.getElementById("Metas");
        telaMetas.style.display = "none";
        var telaBiblioteca = document.getElementById("Biblioteca");
        telaBiblioteca.style.display = "none";
    } else if (opcaoMenu === "btnHome") {
        var telaHome = document.getElementById("Home");
        telaHome.style.display = "flex";
        var telaBus = document.getElementById("Busca");
        telaBus.style.display = "none";
        var telaMetas = document.getElementById("Metas");
        telaMetas.style.display = "none";
        var telaBiblioteca = document.getElementById("Biblioteca");
        telaBiblioteca.style.display = "none";
    } else if (opcaoMenu === "btnMetas") {
        var telaMetas = document.getElementById("Metas");
        telaMetas.style.display = "flex";
        var telaHome = document.getElementById("Home");
        telaHome.style.display = "none";
        var telaBus = document.getElementById("Busca");
        telaBus.style.display = "none";
        var telaBiblioteca = document.getElementById("Biblioteca");
        telaBiblioteca.style.display = "none";
    } else if (opcaoMenu === "btnBiblioteca") {
        var telaBiblioteca = document.getElementById("Biblioteca");
        telaBiblioteca.style.display = "flex";
        var telaHome = document.getElementById("Home");
        telaHome.style.display = "none";
        var telaBus = document.getElementById("Busca");
        telaBus.style.display = "none";
        var telaMetas = document.getElementById("Metas");
        telaMetas.style.display = "none";
    }
}
