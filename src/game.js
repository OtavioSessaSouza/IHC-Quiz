const question = document.getElementById("questao");
const choices = Array.from(document.getElementsByClassName("alternativa-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("pontuacao");
const progressBarFull = document.getElementById("progressBarFull");
const btnProx = document.getElementById("prox");
const btnAnt = document.getElementById("Ant");
var questionIndex;
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "Qual o Impacto das TICs na Sociedade?",
    choice1: "As TICs mudaram tudo o'que antes não era possível, a velocidade que a mídia espalha informação a forma com que as pessoas estão recebendo acesso a internet e se conectando a esse mundo onde o conteúdo digital ensina e entretém as pessoas no seu dia a dia, hoje a sociedade é totalmente dependente da tecnologia tanto para trabalhar,estudar,relaxar,comprar entre outras funções ",
    choice2: "As TICs estão revolucionando a área de entretenimento. Jogos eletrônicos estão ficando mais sofisticados, com enredos mais elaborados, melhores gráficos e com maior aplicação de inteligência artificial",
    choice3: "As TICs são instrumentos não tecnológicos que possibilitam a interação entre as pessoas.",
    choice4: "As TICs prejudicam a cultura e promovem a fake news sem ter um limite e isso prejudica a sociedade.",
    answer: 1
  },
  {
    question:"O que as Tecnologias da Informação permitem criar?",
    choice1: "permitem criar documentos capazes de vincular um número grande de pessoas da empresa.",
    choice2: "permitem criar sistemas computacionais embutidos em diferentes dispositivos combinados entre poder computacional e meios de comunicação.",
    choice3: "permitem criar pastas de trabalho, formatando células, elaborando fórmulas, utilizando filtros, proteção etc.",
    choice4: "Todas as alternativas acima.",
    answer: 2
  },
  {
    question: "Quais são os benefícios de estudar o IHC?",
    choice1: "Estudar a natureza da interação envolve investigar o que ocorre enquanto as pessoas utilizam sistemas interativos em suas atividades.",
    choice2: "Estudar diversas áreas de conhecimento que possuem perspectivas distintas sobre o problema, com diferentes experiências, estratégias de solução e conhecimentos estabelecidos na interação.",
    choice3: "Estudar fenômenos de interação entre seres humanos e sistemas computacionais nos permite compreendê-los para melhorarmos a concepção, construção e inserção das TICs na vida das pessoas, sempre buscando uma boa experiência de uso.",
    choice4: "Estudar características humanas também influenciam a participação das pessoas na interação com as TICs na vida das pessoas.",
    answer: 3
  }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

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

