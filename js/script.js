// Função para exibir saudação baseada na hora (Requisito: Funções Temporais)
function exibirSaudacao() {
    const agora = new Date();
    const hora = agora.getHours();
    const elementoSaudacao = document.getElementById('saudacao');
    
    let mensagem;

    if (hora >= 5 && hora < 12) {
        mensagem = "☀️ Bom dia! Que tal um banho matinal para o seu pet?";
    } else if (hora >= 12 && hora < 18) {
        mensagem = "🌤️ Boa tarde! Temos horários disponíveis para tosa.";
    } else {
        mensagem = "🌙 Boa noite! Agende o horário do seu pet para amanhã.";
    }

    if (elementoSaudacao) {
        elementoSaudacao.innerText = mensagem;
    }
}

// Executa a função assim que a página carrega
window.onload = exibirSaudacao;