function enviarPedido(event) {
  event.preventDefault();

  const pedido = document.getElementById('pedido').value;
  const numeroWhatsApp = '5584988057989';
  const mensagem = encodeURIComponent(pedido); 

  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

  window.open(urlWhatsApp, '_blank');
}

const cards = document.querySelectorAll('.cards');

cards.forEach(function(card) {
  card.addEventListener('click', function() {
    
    const formElement = document.querySelector('#enviar-pedido');
    
    formElement.scrollIntoView({ behavior: 'smooth' });
  });
});
