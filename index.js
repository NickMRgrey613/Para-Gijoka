const perguntas = [
    { texto: "Você é a pessoa mais incrivel do mundo?", resposta_correta: "sim" },
    { texto: "Voce vai desistir da vida?", resposta_correta: "não" },
    { texto: "Tu vai me abandonar?", resposta_correta: "não" }
];

let pontuacao = 0;
let perguntaAtual = 0;

function carregarPergunta() {
    const perguntaElement = document.getElementById("pergunta");
    const respostaElement = document.getElementById("resposta");
    const resultadoElement = document.getElementById("resultado");

    if (perguntaAtual < perguntas.length) {
        const pergunta = perguntas[perguntaAtual];
        perguntaElement.textContent = pergunta.texto;
        respostaElement.value = "";
        resultadoElement.textContent = "";
    } else {
        perguntaElement.textContent = "Fim do jogo. Sua pontuação é: " + pontuacao;
        respostaElement.style.display = "none";
    }
}

function verificarResposta() {
    const respostaElement = document.getElementById("resposta");
    const resultadoElement = document.getElementById("resultado");

    const resposta = respostaElement.value.toLowerCase();
    const respostaCorreta = perguntas[perguntaAtual].resposta_correta;

    if (resposta === respostaCorreta) {
        resultadoElement.textContent = "MAzza Miseravi!";
        pontuacao++;
    } else {
        resultadoElement.textContent = "ERROOOOUUUU. A resposta correta era: sim nao nao";
    }

    perguntaAtual++;
    carregarPergunta();
}

document.addEventListener("DOMContentLoaded", carregarPergunta);
