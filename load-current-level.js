var currentLevel = parseInt(window.sessionStorage['currentLevel']);

if (isNaN(currentLevel)) currentLevel = 1;

if (currentLevel > 1) {
  document.getElementById('previous').style.display = 'block';
}

function showNextLevelButton() {
  document.getElementById('next').style.display = 'block';
}

function goToPreviousLevel() {
  window.sessionStorage['currentLevel'] = currentLevel - 1;
  window.location.reload();
}

function goToNextLevel() {
  window.sessionStorage['currentLevel'] = currentLevel + 1;
  window.location.reload();
}

function base_setupLevel() {}
function base_drawLevel() {}

function setupLevel() {}
function drawLevel() {}

document.write('<script src="levels/0' + currentLevel + '-base.js"></script>');
document.write('<script src="levels/0' + currentLevel + '.js"></script>');
