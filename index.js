const edicionGeneticaLink = document.getElementById('edicion-genetica-link');
const edicionGeneticaSection = document.getElementById('edicion-genetica');

const acidosNucleicosLink = document.getElementById('acidos-nucleicos-link');
const acidosNucleicosSection = document.getElementById('acidos-nucleicos');

const videosLink = document.getElementById('videos-link');
const videosSection = document.getElementById('videos');

const btnEmparejar = document.getElementById('btn-emparejar');
const btnAhorcado = document.getElementById('btn-ahorcado');
const btnQuiz = document.getElementById('btn-quiz');

const gameContainer = document.getElementById('game-container');
const gameIframe = document.getElementById('game-iframe');

edicionGeneticaLink.addEventListener('click', function() {
  edicionGeneticaSection.classList.toggle('hidden');
  acidosNucleicosSection.classList.add('hidden');
  videosSection.classList.add('hidden');
  gameContainer.classList.add('hidden');
});

acidosNucleicosLink.addEventListener('click', function() {
  acidosNucleicosSection.classList.toggle('hidden');
  edicionGeneticaSection.classList.add('hidden');
  videosSection.classList.add('hidden');
  gameContainer.classList.add('hidden');
});

videosLink.addEventListener('click', function() {
  videosSection.classList.toggle('hidden');
  edicionGeneticaSection.classList.add('hidden');
  acidosNucleicosSection.classList.add('hidden');
  gameContainer.classList.add('hidden');
});

btnEmparejar.addEventListener('click', function() {
  gameIframe.src = 'https://wordwall.net/es/embed/7c7210bf03174d54bcd3e7e568878f3d?themeId=22&templateId=3&fontStackId=0';
  gameContainer.classList.remove('hidden');
});

btnAhorcado.addEventListener('click', function() {
  gameIframe.src = 'https://wordwall.net/es/embed/607310748b87468294b81e9a9a5256ee?themeId=44&templateId=73&fontStackId=12';
  gameContainer.classList.remove('hidden');
});

btnQuiz.addEventListener('click', function() {
  gameIframe.src = 'https://wordwall.net/es/embed/597faa04e1b245bf98b560938649aa3d?themeId=21&templateId=69&fontStackId=12';
  gameContainer.classList.remove('hidden');
});

window.addEventListener('click', function(event) {
  if (!event.target.matches('button')) {
    edicionGeneticaSection.classList.add('hidden');
    acidosNucleicosSection.classList.add('hidden');
    videosSection.classList.add('hidden');
    gameContainer.classList.add('hidden');
  }
});

