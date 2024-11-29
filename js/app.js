function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '<a onclick="alterarStatus(1)" href="#" class="dashboard__item__button dashboard__item__button--return">Devolver</a>'
    
    alert(nomeJogo.textContent);
}