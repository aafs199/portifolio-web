// 1. OBTÉM REFERÊNCIA AO FORMULÁRIO
// Usamos o ID 'formContato' definido no HTML
const formContato = document.getElementById('formContato');

// 2. OBTÉM REFERÊNCIA À MENSAGEM DE FEEDBACK
const feedbackMensagem = document.getElementById('feedbackMensagem');

// COMENTÁRIO: Adiciona um 'ouvinte de evento' para interceptar o envio do formulário.
formContato.addEventListener('submit', function(event) {
    // Impede o comportamento padrão do formulário (que seria recarregar a página)
    event.preventDefault(); 

    // Oculta a mensagem de feedback anterior
    feedbackMensagem.style.display = 'none';

    // Chama a função principal de validação
    validarEEnviarFormulario();
});


/**
 * Função que verifica os campos e simula o envio.
 */
function validarEEnviarFormulario() {
    // 3. OBTÉM OS VALORES DOS CAMPOS
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // 4. VERIFICA SE TODOS OS CAMPOS ESTÃO PREENCHIDOS (Validação Obrigatória)
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return; // Sai da função se houver campos vazios
    }

    // 5. VERIFICA O FORMATO DO E-MAIL (Validação Obrigatória)
    // Usa uma expressão regular simples para verificar o padrão básico:
    // algo@algo.algo
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido (ex: usuario@dominio.com).');
        return; // Sai da função se o e-mail for inválido
    }

    // ----------------------------------------------------
    // SE CHEGAMOS AQUI, A VALIDAÇÃO FOI UM SUCESSO!
    // ----------------------------------------------------

    // 6. SIMULAÇÃO DO ENVIO (Obrigatório)
    
    // Limpa os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';

    // Exibe a mensagem de sucesso (ou poderia ser um modal/alert)
    
    // Opção 1: Usar o alerta (mais simples)
    // alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
    
    // Opção 2: Mostrar o elemento visual de feedback no próprio HTML
    feedbackMensagem.textContent = 'Mensagem enviada com sucesso! Entrarei em contato em breve.';
    feedbackMensagem.style.display = 'block';
    
    // Podemos também adicionar um efeito visual de sucesso
    formContato.style.border = '2px solid green';
    
    // Remove o efeito após 5 segundos para limpar a interface
    setTimeout(() => {
        feedbackMensagem.style.display = 'none';
        formContato.style.border = 'none';
    }, 5000); 

    // COMENTÁRIO: Simulação de envio concluída.
}