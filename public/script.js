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


function adicionarUsuario() {
    const user = document.getElementById("usernameCad").value;
    const email = document.getElementById("emailCad").value;
    const senha = document.getElementById("senhaCad").value;
    const dataNascimento = document.getElementById("dataCad").value;

    if(!user || !email || !senha || !data){
        alert("Preencha todos os campos!");
        return;
    }

    fetch('/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: user,
            email: email,
            senha: senha,
            dataNascimento: dataNascimento
        })
    })
    .then(res => res.json())
    .then(() => {
        //Limpa os campos apos salvar
        document.getElementById('usernameCad').value = '';
        document.getElementById('emailCad').value = '';
        document.getElementById('senhaCad').value = '';
        document.getElementById('dataCad').value = '';
        window.location.href = "index.html";
        // mostrarFormularioLivro(); //Fecha o formulario
        // carregarLivros(); //Atualiza a lista na tela
    })
    .catch(err => console.error("Erro ao adicionar usuário:", err));
}

function loginUsuario() {
    const user = document.getElementById("usernameLog").value;
    const senha = document.getElementById("senhaLog").value;
    
    if(!user || !senha){
        alert("Preencha todos os campos!");
        return;
    }

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            senha: senha
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.message === 'Login bem-sucedido!') {
            alert('Login realizado com sucesso!');
            window.location.href = "index.html";
            // Redirecionar para a página principal ou outra página após login
        } else {
            alert('Credenciais inválidas!');
        }
    })
    .catch(err => console.error("Erro ao fazer login:", err));
}

function buscarLivros() {
    const query = document.getElementById('campoBusca').value;

    fetch('/buscar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
    })
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('resultBusca');
        if (!container) return;

        container.innerHTML = '';
        container.innerHTML = `<div style="width: 100%; display: flex; justify-content: flex-start;padding: 10px; background-color: #d2effe; font-size: 1.5rem;">
                                    <h3>Resultados para "${query}"</h3>
                                </div>`;
        data.forEach(livro => {
            container.innerHTML += `
                <div class="livros">
                    <img src="${livro.capa}" 
                    alt="${livro.titulo}" 
                    onclick="exibirDetalhes('${livro.titulo}', '${livro.capa}', '${livro.descricao}', '${livro.autor}')"
                    style="width: 150px; border-radius: 8px;">
                </div>`;
        });
    })
    .catch(err => console.error("Erro ao buscar livros:", err));
}

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
        <img src="${capa}" alt="${titulo}" style="border-radius: 8px;pointer-events: auto;width: 100%;height: auto; box-shadow: 0px 4px 15px rgba(0,0,0,0.2);"> 
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
        <button class="botao" onclick="adicionarLivro()">Adicionar livro</button>
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

const bancoDeDadosLivros = [
    {
        id: 1,
        titulo: "Hanako-kun e os Mistérios do Colégio Kamone VOL 1",
        autor: "AIDAIRO",
        totalPaginas: 186,
        paginaAtual: 93,
        capa: "imagens/hanako_vol1.png"
    },
    {
        id: 2,
        titulo: "Coraline",
        autor: "Neil Gaiman",
        totalPaginas: 160,
        paginaAtual: 40,
        capa: "imagens/coraline.png"
    }
];

// 1. FUNÇÃO PARA EXIBIR A LISTA DA BIBLIOTECA
function mostrarListaBiblioteca() {
    const container = document.getElementById("conteudo_biblioteca");
    if (!container) return;

    // Monta a estrutura padrão: Título h2 + Grid de livros
    container.innerHTML = `
        <h2 class="texto">Biblioteca</h2>
        <div class="biblioteca-grid"></div>
    `;

    const grid = container.querySelector(".biblioteca-grid");

    // Preenche o grid com os cards vindos do banco de dados
    bancoDeDadosLivros.forEach(livro => {
        const card = document.createElement("div");
        card.className = "card_livros";
        card.style.cursor = "pointer";
        card.onclick = () => mostrarDetalhesLivro(livro.id);

        const img = document.createElement("img");
        img.src = livro.capa;
        img.alt = livro.titulo;
        img.onerror = function() { this.src = "imagens/logo.png"; };

        card.appendChild(img);
        grid.appendChild(card);
    });
}

// 2. FUNÇÃO PARA EXIBIR OS DETALHES DO LIVRO NO LUGAR DA LISTA
function mostrarDetalhesLivro(idLivro) {
    const container = document.getElementById("conteudo_biblioteca");
    const livro = bancoDeDadosLivros.find(l => l.id === idLivro);
    if (!container || !livro) return;

    const percentual = Math.round((livro.paginaAtual / livro.totalPaginas) * 100) || 0;

    // Substitui todo o conteúdo interno pelas informações do livro selecionado
    container.innerHTML = `
        <div class="detalhes-container-integrado">
            
            <div class="detalhes-topo">
                <button class="btn-voltar-integrado" onclick="mostrarListaBiblioteca()">&larr;</button>
                <h3 class="titulo-dados-livro">Dados do Livro</h3>
            </div>

            <div class="detalhes-corpo">
                <img src="${livro.capa}" class="detalhe-capa-grande" onerror="this.src='imagens/logo.png'">
                
                <div class="detalhe-info-bloco">
                    <h3>Livro: ${livro.titulo}</h3>
                    <p>Autor: ${livro.autor}</p>
                    <br>
                    <p>Total de páginas: ${livro.totalPaginas}</p>
                    <p>
                        Página até lida: 
                        <input type="number" class="input-pagina" value="${livro.paginaAtual}">
                        <button class="btn-concluir-amarelo">Marcar como concluída</button>
                    </p>
                    
                    <div class="barra-progresso-bg">
                        <div class="barra-progresso-fill" style="width: ${percentual}%;"></div>
                        <div class="barra-progresso-porcentagem">${percentual}%</div>
                    </div>
                </div>
            </div>

        </div>
    `;
}

// Inicialização automática ao abrir a página
window.onload = function() {
    mostrarListaBiblioteca();
};