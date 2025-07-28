let score = 0;
let highScore = localStorage.getItem('highScore') || 0;
const coffeeCup = document.getElementById('coffee-cup');

document.getElementById('high-score').textContent = 'High Score: ' + highScore;

document.getElementById('start-button').addEventListener('click', function() {
    var status = document.getElementById('status');
    var progress = document.getElementById('progress');
    var actions = document.getElementById('actions');
    var scoreDisplay = document.getElementById('score');

    status.textContent = 'Brewing coffee...';
    progress.style.width = '25%';
    actions.style.display = 'block';
    score = 0;
    scoreDisplay.textContent = 'Score: ' + score;
    coffeeCup.style.display = 'block';
    coffeeCup.src = 'path-to-coffee-cup-image-step1'; // Update the image path as needed

    document.getElementById('add-water').addEventListener('click', function() {
        status.textContent = 'Adding water...';
        progress.style.width = '50%';
        score += 10;
        scoreDisplay.textContent = 'Score: ' + score;
        coffeeCup.src = 'path-to-coffee-cup-image-step2'; // Update the image path as needed
    });

    document.getElementById('add-coffee').addEventListener('click', function() {
        status.textContent = 'Adding coffee...';
        progress.style.width = '75%';
        score += 10;
        scoreDisplay.textContent = 'Score: ' + score;
        coffeeCup.src = 'path-to-coffee-cup-image-step3'; // Update the image path as needed
    });

    document.getElementById('add-milk').addEventListener('click', function() {
        status.textContent = 'Adding milk...';
        progress.style.width = '90%';
        score += 10;
        scoreDisplay.textContent = 'Score: ' + score;
        coffeeCup.src = 'path-to-coffee-cup-image-step4'; // Update the image path as needed
    });

    document.getElementById('stir').addEventListener('click', function() {
        status.textContent = 'Stirring...';
        progress.style.width = '100%';
        score += 20;
        scoreDisplay.textContent = 'Score: ' + score;
        coffeeCup.src = 'path-to-coffee-cup-image-step5'; // Update the image path as needed

        if(score > highScore) {
            highScore = score;
            localStorage.setItem('highScore', highScore);
            document.getElementById('high-score').textContent = 'High Score: ' + highScore;
        }

        setTimeout(function() {
            status.textContent = 'Your coffee is ready! Enjoy!';
        }, 1000);
    });
});

document.getElementById('reset-button').addEventListener('click', function() {
    var status = document.getElementById('status');
    var progress = document.getElementById('progress');
    var scoreDisplay = document.getElementById('score');
    var actions = document.getElementById('actions');

    status.textContent = 'Click \'Start Brewing\' to make coffee';
    progress.style.width = '0';
    score = 0;
    scoreDisplay.textContent = 'Score: ' + score;
    actions.style.display = 'none';
    coffeeCup.style.display = 'none';
});
