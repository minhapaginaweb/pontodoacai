function enviarPedido(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  const pedido = document.getElementById('pedido').value; // Captura o valor do textarea
  const numeroWhatsApp = '5584981089164'; // Substitua pelo número da sua loja no formato correto
  const mensagem = encodeURIComponent(pedido); // Codifica a mensagem para URL

  // Constrói a URL do WhatsApp
  const urlWhatsApp = `https://wa.me/${5584981089164}?text=${mensagem}`;

  // Redireciona para o WhatsApp
  window.open(urlWhatsApp, '_blank');
}
