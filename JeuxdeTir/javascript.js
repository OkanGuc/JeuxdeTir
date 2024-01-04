let start = document.getElementById("start_button");
let mechant = document.getElementById("mechant");
let scoreElement = document.getElementById("score_value");
let timerElement = document.getElementById("timer");
let resetButton = document.getElementById("reset_button"); 
let totalSecondes = 15; 
let score = 0;
let interval; //  pour pouvoir effacer l'intervalle plus tard

mechant.style.display = "none";
resetButton.style.display = "none"; // Cache le bouton de réinitialisation au début

function click_action() {
    start.style.display = "none";
    mechant.style.display = "block";
    

    interval = setInterval(function() {
        let minutes = Math.floor(totalSecondes / 60);
        let secondes = totalSecondes % 60;
        timerElement.textContent = `Temps restant : ${minutes < 10 ? '0' : ''}${minutes}:${secondes < 10 ? '0' : ''}${secondes}`;

        if (totalSecondes <= 0) {
            clearInterval(interval);
            timerElement.textContent = "Temps écoulé!";
            mechant.style.display = "none";
            resetButton.style.display = "block";

            // alerte en fonction du score
            if (score >= 40) {
                alert("Excellent! Votre score est de : " + score);
            } else if (score >= 30) {
                alert("Bravo! Votre score est de : " + score);
            } else if (score >= 20) {
                alert("Pas mal! Votre score est de : " + score);
            } else if (score >= 10) {
                alert("Pas terrible! Votre score est de : " + score);
            } else {
                alert("Vous êtes nul! Votre score est de : " + score);
            }
        }

        totalSecondes--;
    }, 1000);

    mechant.addEventListener("click", function() {
        score++;
        scoreElement.textContent = "Score : " + score;

        // Changement de position
        var nouvellePosX = Math.random() * window.innerWidth;
        var nouvellePosY = Math.random() * window.innerHeight;
        nouvellePosX = Math.min(nouvellePosX, window.innerWidth - mechant.offsetWidth);
        nouvellePosY = Math.min(nouvellePosY, window.innerHeight - mechant.offsetHeight);
        mechant.style.left = nouvellePosX + 'px';
        mechant.style.top = nouvellePosY + 'px';
    });
}

function resetGame() {
    score = 0;
    totalSecondes = 15;
    scoreElement.textContent = "Score : 0";
    timerElement.textContent = "Temps restant : 00:15";
    mechant.style.display = "none";
    start.style.display = "block";
    resetButton.style.display = "none"; // Cache le bouton de réinitialisation
    clearInterval(interval); // Effacer l'intervalle 
}

start.addEventListener("click", click_action);
resetButton.addEventListener("click", resetGame); // Gestionnaire d'événements pour le bouton de réinitialisation

