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
    var blocoDetalhes = document.getElementById('detalhes_livro');
    var divInfoLivro = document.getElementById('InfoLivro');
    if (opcaoMenu === "btnBusca") {
        var telaBus = document.getElementById("Busca");
        telaBus.style.display = "flex";
        var telaHome = document.getElementById("Home");
        telaHome.style.display = "none";
        var telaMetas = document.getElementById("Metas");
        telaMetas.style.display = "none";
        var telaBiblioteca = document.getElementById("Biblioteca");
        telaBiblioteca.style.display = "none";
        blocoDetalhes.style.display = "none";
        divInfoLivro.style.display = "none";
    } else if (opcaoMenu === "btnHome") {
        var telaHome = document.getElementById("Home");
        telaHome.style.display = "flex";
        var telaBus = document.getElementById("Busca");
        telaBus.style.display = "none";
        var telaMetas = document.getElementById("Metas");
        telaMetas.style.display = "none";
        var telaBiblioteca = document.getElementById("Biblioteca");
        telaBiblioteca.style.display = "none";
        blocoDetalhes.style.display = "none";
        divInfoLivro.style.display = "none";
    } else if (opcaoMenu === "btnMetas") {
        var telaMetas = document.getElementById("Metas");
        telaMetas.style.display = "flex";
        var telaHome = document.getElementById("Home");
        telaHome.style.display = "none";
        var telaBus = document.getElementById("Busca");
        telaBus.style.display = "none";
        var telaBiblioteca = document.getElementById("Biblioteca");
        telaBiblioteca.style.display = "none";
        blocoDetalhes.style.display = "none";
        divInfoLivro.style.display = "none";
    } else if (opcaoMenu === "btnBiblioteca") {
        var telaBiblioteca = document.getElementById("Biblioteca");
        telaBiblioteca.style.display = "flex";
        var telaHome = document.getElementById("Home");
        telaHome.style.display = "none";
        var telaBus = document.getElementById("Busca");
        telaBus.style.display = "none";
        var telaMetas = document.getElementById("Metas");
        telaMetas.style.display = "none";
        blocoDetalhes.style.display = "none";
        divInfoLivro.style.display = "none";
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

// function adicionarLivro() {
//     const titulo = document.getElementById("titulo").value;
//     const autor = document.getElementById("autor").value;
//     const capa = document.getElementById("capa").value;

//     if(!titulo || !autor || !capa){
//         alert("Preencha todos os campos!");
//         return;
//     }

//     fetch('/livros',{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             titulo: titulo,
//             autor: autor,
//             capa: capa,
//             descricao:"Sem descrição" //Enviando valor padrão para n dar erro
//         })
//     })
//     .then(res => res.json())
//     .then(() => {
//         //Limpa os campos apos salvar
//         document.getElementById('titulo').value = '';
//         document.getElementById('autor').value = '';
//         document.getElementById('capa').value = '';

//         mostrarFormularioLivro(); //Fecha o formulario
//         carregarLivros(); //Atualiza a lista na tela
//     })
//     .catch(err => console.error("Erro ao adicionar:",err));
// }

function carregarRecomendacoes() {
    const container = document.getElementById('lista_recomendacoes');
    if (!container) return;

    fetch('/recomendacoes')
    .then(res => res.json())
    .then(data => {
        if (data && data.length > 0) {
            container.innerHTML = ''; 
            data.forEach(livro => {
                container.innerHTML += `
                    <div class="livros">
                        <img src="${livro.capa}" 
                        alt="${livro.titulo}" 
                        onclick="exibirDetalhes('${livro.titulo}', '${livro.capa}', '${livro.descricao}', '${livro.autor}')"
                        style="width: 150px; border-radius: 8px;">
                    </div>`;
            });
            console.log("eSTOU AQUI");
        }
    })
    .catch(err => console.error("Erro ao carregar recomendações:", err));
}

function exibirDetalhes(titulo,capa,descricao,autor) {
    var blocoDetalhes = document.getElementById('detalhes_livro');
    var divInfoLivro = document.getElementById('InfoLivro');
    if (!blocoDetalhes) return;
    divInfoLivro.style.display = "flex";
    blocoDetalhes.style.display = "flex";
    blocoDetalhes.innerHTML = `
    <div style="display: flex;margin-top: 40px;width:calc(50% - 40px);">
        <img src="${capa}" alt="${titulo}" style="border-radius: 8px;pointer-events: auto;width: 100%;height: auto;"> 
    </div>

    <div style="width: calc(50% + 40px);height:calc(100% - 50px);padding-left: 20px;display: flex;flex-direction: column;gap: 20px;">
        <div style="display: flex; justify-content: flex-end; z-index: 4;">
            <button onclick="fecharDetalhes()" class="btn-fechar" style="float: right; cursor: pointer;">&times;</button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 20px;height:100%;" class="texto">
            <h3 style="font-size: 2rem">${titulo}</h3>
            <p style="font-size: 1.2rem;text-align: justify;"><strong>Autor:</strong> ${autor}</p>
            <p style="font-size: 1.2rem;text-align: justify;"><strong>Descrição:</strong> ${descricao}</p>
        </div>    
    
    </div>
    `;
}
function fecharDetalhes() {
    var blocoDetalhes = document.getElementById('detalhes_livro');
    var divInfoLivro = document.getElementById('InfoLivro');
    blocoDetalhes.style.display = "none";
    divInfoLivro.style.display = "none";
}
// Certifique-se de que carregarLivros existe ou comente a chamada abaixo
document.addEventListener("DOMContentLoaded", function () {
    // carregarLivros(); 
    carregarRecomendacoes();
});
