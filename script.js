
function enviarMensagemWhatsApp() {
    // Número de WhatsApp (inclui o código do país sem o "+", por exemplo, 351 para Portugal)
    var numeroWhatsApp = '81985529514';

    // Mensagem pronta que será enviada
    var mensagem = 'Boa Tarde, Preciso da minha ficha de treino da semana!';

    // Cria o link com o número e a mensagem codificada
    var url = 'https://api.whatsapp.com/send?phone=' + numeroWhatsApp + '&text=' + encodeURIComponent(mensagem);

    // Abre o link numa nova aba
    window.open(url, '_blank');
}

