const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em que país está localizado Auschwitz?",
        alternativas: [
            {
                texto: "Polônia.",
                afirmacao: "A Polônia estava no centro da Europa e fazia fronteira com a Alemanha Nazista."
            },
            {
                texto: "Alemanha.",
                afirmacao: "Facilitando transporte de prisioneiros e a logistica para operações militares e derepressão."
            }
        ]
    },
    {
        enunciado: "Qual era a pricipal função de Auschwit durante a segunda Guerra Mundial?",
        alternativas: [
            {
                texto: "Campo de concentração e extermínio.",
                afirmacao: "Foi maior e mais infame complexo de campos de concentração e exterminio estabelecido pelos nazistas."
            },
            {
                texto: "Base militar.",
                afirmacao: "Simbolizando a brutalidade e a ideologia genocida de Hitler."
            }
        ]
    },
    {
        enunciado: "Quantos campos pricipais compunham o complexo de Auschwitz?",
        alternativas: [
            {
                texto: "Dois.",
                afirmacao: "Complexo de Auschwitz foi organizado em três campos distintos para diferentes propósitos."
            },
            {
                texto: "Três.",
                afirmacao: "Fazendo parte da estratégia de terror e controle implementada pelos nazistas durante a Segunda Guerra Mundial."
            }
        ]
    },
    {
        enunciado: "Qual era o nome do médico notório por suas experiências em Auchwitz?",
        alternativas: [
            {
                texto: "Joseph Goebbels.",
                afirmacao: "Conheido por suas experiências médicas grotescas realizadas em prisioneiros em Auchwitz."
            },
            {
                texto: "Josef Mengele.",
                afirmacao: "Fugiu para America após a guerra, onde viveu até sua morte sem nunca ter sido julgado pelos seus crimes."
            }
        ]
    },
    {
        enunciado: "Em que ano Auschwitz foi libertado pelas forças aliadas? ",
        alternativas: [
            {
                texto: "1945",
                afirmacao: "Foi um dos maiores e mais notórios campos de concentração nazista, onde milhões de judeus e outros grupos de etnias diversas foram massacrados pelos nazistas."
            },
            {
                texto: "1944.",
                afirmacao: "A libertação de Auchwitz marcou o fim do terror que aconteceu lá e revelou ao mundo a extensão dos horrores cometidos pelos nazistas durante a Segunda Guerra Mundial."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sobre a História";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();