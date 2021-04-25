const questoes ={
    "capitulo1" : [
        {
            "id":1,
            "enunciado" : "Qual o Impacto das TICs na Sociedade?",
            "alternativa1": "As TICs mudaram tudo o'que antes não era possível, a velocidade que a mídia espalha informação a forma com que as pessoas estão recebendo acesso a internet e se conectando a esse mundo onde o conteúdo digital ensina e entretém as pessoas no seu dia a dia, hoje a sociedade é totalmente dependente da tecnologia tanto para trabalhar,estudar,relaxar,comprar entre outras funções.",
            "alternativa2": "As TICs estão revolucionando a área de entretenimento. Jogos eletrônicos estão ficando mais sofisticados, com enredos mais elaborados, melhores gráficos e com maior aplicação de inteligência artificial.",
            "alternativa3": "As TICs são instrumentos não tecnológicos que possibilitam a interação entre as pessoas",
            "alternativa4": "As TICs prejudicam a cultura e promovem a fake news sem ter um limite e isso prejudica a sociedade.",
            "correta": 1
        },
        {
            "id":2,
            "enunciado" : "O que as Tecnologias da Informação permitem criar?",
            "alternativa1": "Permitem criar sistemas computacionais embutidos em diferentes dispositivos combinados entre poder computacional e meios de comunicação.",
            "alternativa2": "Permitem criar documentos capazes de vincular um número grande de pessoas da empresa.",
            "alternativa3": "Permitem criar pastas de trabalho, formatando células, elaborando fórmulas, utilizando filtros, proteção etc.",
            "alternativa4": "Todas as alternativas acima.",
            "correta": 1
        },
        {
            "id":3,
            "enunciado" : "?",
            "alternativa1": ".",
            "alternativa2": ".",
            "alternativa3": ".",
            "alternativa4": ".",
            "correta": 1
        }
    ],
    "capitulo2" : [
        
    ],
    "capitulo3" : [
        
    ]
}

function jogo(){
    enunciado = document.getElementById("enunciado");
    console.log(enunciado.textContent);
    alternativa1 = document.getElementById("alt1");
    console.log(alternativa1);


}
jogo();