const questao = document.getElementById('question');
const alternativaTexto = Array.from(document.getElementsByClassName('alternativa-text'));
const progressText = document.getElementById('progressText');
const pontuacao = document.getElementById('pontuacao');
const barraDeProgrecao = document.getElementById('progressBarFull');


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [];