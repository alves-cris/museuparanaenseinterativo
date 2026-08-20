function mudarSala(idSala) {
  // 1. Remove a classe 'ativa' de todas as seções (salas)
  const salas = document.querySelectorAll('.sala');
  salas.forEach(sala => {
    sala.classList.remove('ativa');
  });

  // 2. Remove o estado ativo dos botões de navegação
  const botoes = document.querySelectorAll('.nav-btn');
  botoes.forEach(botao => {
    botao.classList.remove('active');
  });

  // 3. Mostra a sala correspondente ao clique
  const salaSelecionada = document.getElementById(idSala);
  if (salaSelecionada) {
    salaSelecionada.classList.add('ativa');
  }

  // 4. Destaca o botão correspondente na barra de navegação
  const botaoAtivo = Array.from(botoes).find(btn => btn.getAttribute('onclick').includes(idSala));
  if (botaoAtivo) {
    botaoAtivo.classList.add('active');
  }
}
