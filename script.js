
// VALIDAÇÃO E SIMULAÇÃO DE FORMULÁRIO

const formContato = document.getElementById('formContato');
const feedbackMensagem = document.getElementById('feedbackMensagem');

formContato.addEventListener('submit', function(event) {
    event.preventDefault(); 
    validarEEnviarFormulario();
});

function validarEEnviarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação de Campos Vazios
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return; 
    }

    // Validação do Formato de E-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido (ex: usuario@dominio.com).');
        return; 
    }

    // Simulação de Envio
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';

    // Exibe a mensagem de sucesso
    feedbackMensagem.textContent = 'Mensagem enviada com sucesso! Entrarei em contato em breve.';
    feedbackMensagem.style.color = 'green';
    feedbackMensagem.style.display = 'block';
    
    // Oculta a mensagem após 5 segundos
    setTimeout(() => {
        feedbackMensagem.style.display = 'none';
    }, 5000); 
}


// ALTERNÂNCIA DE TEMA CLARO/ESCURO

const botaoAlternarTema = document.getElementById('alternarTema');
const body = document.body;

function alternarTema() {
    // Adiciona ou remove a classe 'tema-escuro' no body
    body.classList.toggle('tema-escuro');

    // Atualiza o texto do botão
    if (body.classList.contains('tema-escuro')) {
        botaoAlternarTema.textContent = 'Trocar para Tema Claro';
        // Salva a preferência
        localStorage.setItem('tema', 'escuro');
    } else {
        botaoAlternarTema.textContent = 'Trocar para Tema Escuro';
        localStorage.setItem('tema', 'claro');
    }
}

// Adiciona o ouvinte de evento de clique
botaoAlternarTema.addEventListener('click', alternarTema);

// Carrega a preferência do usuário ao iniciar a página
(function carregarTema() {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'escuro') {
        body.classList.add('tema-escuro');
        // Define o texto inicial correto do botão se o tema for escuro
        botaoAlternarTema.textContent = 'Trocar para Tema Claro'; 
    }
})();