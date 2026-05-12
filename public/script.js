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
    
function mostrarFormularioLivro() {
    const form = document.getElementById('form-livro');

    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

function adicionarLivro() {
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const capa = document.getElementById("capa").value;

    if(!titulo || !autor || !capa){
        alert("Preencha todos os campos!");
        return;
    }

    fetch('/livros',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            autor: autor,
            capa: capa,
            descricao:"Sem descrição" //Enviando valor padrão para n dar erro
        })
    })
    .then(res => res.json())
    .then(() => {
        //Limpa os campos apos salvar
        document.getElementById('titulo').value = '';
        document.getElementById('autor').value = '';
        document.getElementById('capa').value = '';

        mostrarFormularioLivro(); //Fecha o formulario
        carregarLivros(); //Atualiza a lista na tela
    })
    .catch(err => console.error("Erro ao adicionar:",err));
}

function carregarLivros() {
    const container = document.getElementById('meus_livros');
    if (!container) return;

    // 1. Já coloca o botão de Adicionar de imediato para não ficar vazio
    container.innerHTML = `
        <div class="card_livros">
            <button onclick="mostrarFormularioLivro()" class="btn_mais_estilizado">+</button>
        </div>`;

    // 2. Tenta buscar os livros
    fetch('/livros')
    .then(res => res.json())
    .then(data => {
        if (data && data.length > 0) {
            container.innerHTML = ''; // Limpa para organizar com os livros
            data.forEach(livro => {
                container.innerHTML += `
                    <div class="card_livros">
                        <img src="${livro.capa}" alt="${livro.titulo}">
                    </div>`;
            });
            // Re-adiciona o botão no fim da lista
            container.innerHTML += `
                <div class="card_livros">
                    <button onclick="mostrarFormularioLivro()" class="btn_mais_estilizado">+</button>
                </div>`;
        }
    })
    .catch(err => console.error("Erro ao conectar:", err));
}

document.addEventListener("DOMContentLoaded", function () {
    carregarLivros();
});

function carregarRecomendacoes() {
    const container = document.getElementById('lista_recomendacoes');
    if (!container) return;

    fetch('/livros')
    .then(res => res.json())
    .then(data => {
        if (data && data.length > 0) {
            container.innerHTML = ''; 
            data.forEach(livro => {
                // Insere apenas a capa, como você pediu
                container.innerHTML += `
                    <div class="livros">
                        <img src="${livro.capa}" alt="${livro.titulo}" style="width: 150px; border-radius: 8px;">
                    </div>`;
            });
            console.log("eSTOU AQUI");
        }
    })
    .catch(err => console.error("Erro ao carregar recomendações:", err));
}

document.addEventListener("DOMContentLoaded", function () {
    carregarLivros(); // Carrega a parte de cima (Meus Livros)
    carregarRecomendacoes(); // Carrega a parte de baixo (Recomendações)
});
