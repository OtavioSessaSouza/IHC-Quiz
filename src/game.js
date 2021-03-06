const question = document.getElementById("questao");
const choices = Array.from(document.getElementsByClassName("alternativa-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("pontuacao");
const progressBarFull = document.getElementById("progressBarFull");
const btnProx = document.getElementById("prox");
var questionIndex;
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    "question": "Qual o Impacto das TICs na Sociedade?",
    "choice1": "As TICs mudaram tudo o'que antes não era possível, a velocidade que a mídia espalha informação a forma com que as pessoas estão recebendo acesso a internet e se conectando a esse mundo onde o conteúdo digital ensina e entretém as pessoas no seu dia a dia, hoje a sociedade é totalmente dependente da tecnologia tanto para trabalhar,estudar,relaxar,comprar entre outras funções ",
    "choice2": "As TICs estão revolucionando a área de entretenimento. Jogos eletrônicos estão ficando mais sofisticados, com enredos mais elaborados, melhores gráficos e com maior aplicação de inteligência artificial",
    "choice3": "As TICs são instrumentos não tecnológicos que possibilitam a interação entre as pessoas.",
    "choice4": "As TICs prejudicam a cultura e promovem a fake news sem ter um limite e isso prejudica a sociedade.",
    "answer": 1
  },
  {
    "question":" O que as Tecnologias da Informação permitem criar?",
    "choice1": "permitem criar documentos capazes de vincular um número grande de pessoas da empresa.",
    "choice2": "permitem criar sistemas computacionais embutidos em diferentes dispositivos combinados entre poder computacional e meios de comunicação.",
    "choice3": "permitem criar pastas de trabalho, formatando células, elaborando fórmulas, utilizando filtros, proteção etc.",
    "choice4": "Todas as alternativas acima.",
    "answer": 2
  },
  {
    "question": "Quais são os benefícios de estudar o IHC?",
    "choice1": "Estudar a natureza da interação envolve investigar o que ocorre enquanto as pessoas utilizam sistemas interativos em suas atividades.",
    "choice2": "Estudar diversas áreas de conhecimento que possuem perspectivas distintas sobre o problema, com diferentes experiências, estratégias de solução e conhecimentos estabelecidos na interação.",
    "choice3": "Estudar fenômenos de interação entre seres humanos e sistemas computacionais nos permite compreendê-los para melhorarmos a concepção, construção e inserção das TICs na vida das pessoas, sempre buscando uma boa experiência de uso.",
    "choice4": "Estudar características humanas também influenciam a participação das pessoas na interação com as TICs na vida das pessoas.",
    "answer": 3
  },
  {
    "question": " IHC abrange outras áreas de conhecimentos para saber mais sobre a cultura e o comportamento do usuário, quais são elas:",
    "choice1": "Psicologia, Sociologia e Antropologia.",
    "choice2": "Antropologia, História e Geografia.",
    "choice3": "Sociologia, Física e Matemática.",
    "choice4": "Psicologia, Português e Biologia.",
    "answer": 1
  },
  {
    "question": " A definição da interface com usuário faz uso de conhecimentos e técnicas de áreas como:",
    "choice1": "Design, Agronomia, Astrologia e Semiótica",
    "choice2": "Ergonomia, Astrologia, Linguística e Design.",
    "choice3": "Design, Ergonomia, Linguística e Semiótica.",
    "choice4": "Linguística, Design, Agronomia e Ergonomia.",
    "answer": 3
  },
  {
    "question": " Quais são os objetos de estudo da IHC?",
    "choice1": "Contexto de uso, natureza da interação, arquitetura de sistemas, processos de desenvolvimento e características humanas.",
    "choice2": "Contexto de reuso, natureza da interação,reuso de software, processos de desenvolvimento de interface  e características humanas. ",
    "choice3": "Contexto de uso, natureza da interação, arquitetura de sistemas, processos de desenvolvimento e características humanas.",
    "choice4": "Contexto de reuso, natureza da interação, arquitetura de tics, processos de desenvolvimento e características humanas",
    "answer": 1
  },
  {
    "question": " Sabemos que  benefício de IHC contribui para:",
    "choice1": "aumentar produtividade e a fidelidade do cliente mas aumentar custo de treinamento e custo de suporte técnico.",
    "choice2": "Aumentar o clientes.Reduzir o número e a gravidade dos erros, reduzir os usuário.",
    "choice3": "Aumentar os clientes, reduzir os impactos ambientais através do reuso de software o cliente Reduzir o número e a gravidade dos erros , reduzir o custo de treinamento e custo de suporte técnico.",
    "choice4": "Aumentar a produtividade dos usuários aumentar as vendas e a fidelidade do cliente.Reduzir o número e a gravidade dos erros , reduzir o custo de treinamento e custo de suporte técnico.",
    "answer": 4
  },
  {
    "question": " Os sistemas computacionais são construídos para sempre executarem um conjunto predefinido de instruções. Tudo o que um sistema é capaz de fazer foi definido na sua construção, é correto afirmar que:",
    "choice1": "Consequentemente, os sistemas sempre entendem as ações do usuário que age com criatividade e reinterpretação humana.",
    "choice2": "Consequentemente, os sistemas sempre “interpretam” as ações do usuário de uma forma predefinida, trazendo dificuldades para lidar com criatividade e reinterpretação humana.",
    "choice3": "Consequentemente aprende a lidar com todas ações do usuário.",
    "choice4": "Consequentemente pode também funcionar conjuntos predefinidos de instrução do usuário.",
    "answer": 2
  },
  {
    "question": " Podemos considerar a interação entre o usuário e o sistema um processo de:",
    "choice1": "Manipulação, comunicação, conversa, troca, influência e assim por diante.",
    "choice2": "Manipulação, comunicação e conversa.",
    "choice3": "Conversa, troca e influência.",
    "choice4": "Manipulação, conversa, troca e influência.",
    "answer": 1
  },
  {
    "question": " O contato físico que o usuário tem com a interface é feito através do hardware e do software utilizados, eles consistem em:",
    "choice1": "Mouse, fone de ouvido, alto falante e monitor.",
    "choice2": "Teclado, mouse, impressora, caneta, webcam, tela e controle remoto.",
    "choice3": "Teclado, mouse, joystick, microfone, caneta, câmera, monitor, impressora e alto falante.",
    "choice4": "CPU, joystick, microfone, câmera, caneta e teclado.",
    "answer": 3
  },
  {
    "question": " Affordances da interface de um sistema são responsáveis por guiar o usuário dentro do sistema e também deixar o usuário manipular a interface. Mas quem são os responsáveis por criar essas affordances? ",
    "choice1": "Os arquitetos",
    "choice2": "Os desenvolvedores",
    "choice3": "Os engenheiros",
    "choice4": "Os designers",
    "answer": 4
  },
  {
    "question": " Kammersgaard(1988)identificou quatro perspectivas de interação usuário-sistema a cada uma atribuiu ao usuário e sistemas papel  e características  interação sob pontos de vista diferentes. Quais são essas perspectivas?",
    "choice1": "Sistema, parceiro de discurso, mídia e interface.",
    "choice2": "Sistema, parceiro de discurso, interface e mídia.",
    "choice3": "Sistema,parceiro de sistema, interface e mídia.",
    "choice4": "Sistema, parceiro de discurso,mídia e ferramenta.",
    "answer": 4
  },
  {
    "question": " Qual o significado de interação da mídia na comparação das perspectivas de interação?",
    "choice1": "Comunicação entre usuário.",
    "choice2": "Conversa entre as interfaces do sistema através da comunicação usuário sistemas designer.",
    "choice3": "As alternativas a e b estão corretas",
    "choice4": "Comunicação entre usuários e comunicação designer-usuário.",
    "answer": 4
  },
  {
    "question": " O critério de acessibilidade dentro de IHC está relacionado com:",
    "choice1": "A capacidade de o usuário acessar o sistema para interagir com ele, sem que a interface imponha obstáculos.",
    "choice2": "A necessidade do usuário e suas limitações.",
    "choice3": "A postura do usuário com a interface.",
    "choice4": "Cada usuário com sua deficiência.",
    "answer": 1
  },
  {
    "question": " Um sistema interativo é resultado de um processo de design no qual envolve:",
    "choice1": "Uma visão sobre o sistema, sua interface é funcionalidade.",
    "choice2": "Uma visão sobre o design, seus conhecimentos e prática.",
    "choice3": "Uma visão sobre o cliente, seu desejo e sua capacidade.",
    "choice4": "Uma visão sobre o usuário, seus objetivos, o domínio e o contexto de uso e toma decisões sobre como apoiar.",
    "answer": 4
  },
  {
    "question": " Um dos recursos de comunicação que favorece a comunicabilidade é:",
    "choice1": "Fornecer mais informações sobre a lógica de design conforme a demanda do cliente.",
    "choice2": "Fornecer mais informações sobre a lógica de design conforme a demanda do desenvolvedor.",
    "choice3": "Fornecer mais informações sobre a lógica de design conforme a demanda do usuário. ",
    "choice4": "Fornecer mais informações sobre a lógica de design conforme a demanda do sistema.",
    "answer": 3
  },
  {
    "question": " Nielsen define o critério de usabilidade como um conjunto de fatores que qualificam quão bem uma pessoa pode interagir com um sistema interativo. Os fatores de usabilidade por ele considerados são:",
    "choice1": "Facilidade de aprendizado, facilidade de recordação, eficiência, segurança no uso e satisfação do usuário.",
    "choice2": "Facilidade de aprendizado, recordação, interesse e habilidade.",
    "choice3": "Facilidade de aprendizado,  facilidade de recordação, acesso, segurança e satisfação. ",
    "choice4": "Facilidade de aprendizado, facilidade de recordação, eficiência e segurança somente.",
    "answer": 1
  },
  {
    "question": " A engenharia semiótica é uma teoria de IHC centrada na comunicação.No processo de comunicação os investigados são:",
    "choice1": "Comunicação entre designers, usuários e linguagem .",
    "choice2": "Comunicação entre designers, usuários e sistemas.",
    "choice3": "Comunicação entre designers, usuários e interface.",
    "choice4": "Comunicação entre designers, usuários e TICs.",
    "answer": 2
  },
  {
    "question": " O MHP(Model Human Processor) é composto por três subsistemas, cada qual com suas próprias memórias e processadores, juntamente com alguns princípios de operação, quais são eles?",
    "choice1": "O perceptivo, o motor e o cognitivo.",
    "choice2": "O auditivo, o motor e o cognitivo.",
    "choice3": "O perceptivo, o sonoro e o motor.",
    "choice4": "O perceptivo, o cognitivo e o sonoro.",
    "answer": 1
  },
  {
    "question": " A lei de Hick-Hyman relaciona o tempo que leva para uma pessoa tomar uma decisão com o número de possíveis escolhas que ela possui. Como essa lei pode ser utilizada em IHC?",
    "choice1": "Essa lei pode ser utilizada para fazer uma estimativa de quanto tempo uma pessoa levará para encontrar uma solução para o sistema.",
    "choice2": "Essa lei pode ser utilizada para fazer uma estimativa de quanto tempo uma pessoa levará para encontrar uma dentre diversas opções disponíveis em uma interface.",
    "choice3": "Essa lei pode ser utilizada para ter uma noção do nível de qi de cada usuário.",
    "choice4": "Essa lei pode ser utilizada para saber quais são os critérios do cliente e sua interação com o sistema.",
    "answer": 2
  },
  {
    "question": " A lei de Fitts relaciona o tempo que uma pessoa leva para apontar para algo com o tamanho do objeto-alvo e com a distância entre a mão da pessoa e esse objeto-alvo. Como essa lei pode ser utilizada em IHC?",
    "choice1": "Variações desta lei são utilizadas para saber o tempo necessário para que o usuário acesse o sistema.",
    "choice2": "Variações desta lei são utilizadas para modelar o tempo que a pessoa leva para pensar antes de agir.",
    "choice3": "Variações desta lei são utilizadas para modelar o tempo que leva para o ponteiro chegar na hora certa.",
    "choice4": "Variações desta lei são utilizadas para modelar o tempo que leva para um mouse ou outro dispositivo de entrada semelhante atingir um objeto numa tela.",
    "answer": 4
  },
  {
    "question": " __________ propuseram uma psicologia aplicada de processamento de informação. Segundo eles, a interação humano-computador consiste em o usuário e o computador se engajarem num diálogo comunicativo com o objetivo de realizar alguma tarefa.",
    "choice1": "Card e Moram.",
    "choice2": "Card, Moran e Newell.",
    "choice3": "Moran e Newell.",
    "choice4": "Só Card.",
    "answer": 2
  },
  {
    "question": " A escola de psicologia gestáltica foi fundada em 1912, e dentre seus principais pesquisadores encontram-se Wesheimer, Koffka e Kohler. Eles produziram um conjunto de leis de percepção de padrões, denominadas leis gestálticas ou simplesmente de Gestalt, que consistiam em:",
    "choice1": "Proximidade, boa continuidade, simetria e similaridade somente.",
    "choice2": "Proximidade, simetria, similaridade, destino comum e fecho somente.",
    "choice3": "Proximidade, boa continuidade, simetria, similaridade, destino comum, fecho, região comum e conectividade somente.",
    "choice4": "Proximidade, destino comum, região comum e conectividade somente.",
    "answer": 3
  },
  {
    "question": " A engenharia cognitiva foi concebida por Norman como uma tentativa de aplicar conhecimentos de ciência cognitiva, psicologia cognitiva e fatores humanos ao design e construção de sistemas computacionais. Seus principais objetivos consistiam em:",
    "choice1": "Entender os princípios fundamentais da ação e desempenho humano relevantes para o desenvolvimento de princípios de design.",
    "choice2": "Elaborar Sistemas que sejam agradáveis de usar e que engajem os usuários até de forma prazerosa.",
    "choice3": "Somente a alternativa a está correta.",
    "choice4": "Letra a e b estão corretas.",
    "answer": 4
  }
];
//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("../routes/end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    let choiced = currentQuestion.answer
    
      selectedChoice.parentElement.classList.add(classToApply);

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }else{
      colerTheChoices(choiced);
    }
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};


startGame();

function limparselecao(){
  choices.forEach(choice=>{
    choice.parentElement.classList.remove("correct");
    choice.parentElement.classList.remove("incorrect");
  });
}

btnProx.addEventListener("click",e=>{
  setTimeout(() => {
    limparselecao();
    getNewQuestion();
  }, 500);
});

function colerTheChoices(choiced){
  choices.forEach(choice=>{
    if(choiced ==  choice.dataset["number"]){
      choice.parentElement.classList.add("correct");
    }
  });
}

