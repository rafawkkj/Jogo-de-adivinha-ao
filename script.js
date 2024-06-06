document.addEventListener('DOMContentLoaded', () => {
    const playerName = localStorage.getItem('playerName');
    if (!playerName) {
        window.location.href = 'index.html';
    } else {
        document.getElementById('greeting').textContent = `Olá, ${playerName}!`;
    }

    const maxNumber = 100; // Você pode alterar este valor conforme necessário
    let randomNumber = generateRandomNumber(maxNumber);
    let attempts = 0;

    document.getElementById('maxNumber').textContent = maxNumber;

    document.getElementById('guessForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const userGuess = parseInt(document.getElementById('guess').value);
        attempts++;

      

        if (userGuess === randomNumber) {
            document.getElementById('feedback').textContent = `Parabéns, ${playerName}! Você acertou o número em ${attempts} tentativas.`;
            document.getElementById('playAgain').style.display = 'block';
        } else if (userGuess < randomNumber) {
            document.getElementById('feedback').textContent = 'Tente um número maior.';
        } else {
            document.getElementById('feedback').textContent = 'Tente um número menor.';
            document.getElementById('guess').value = ''; // Limpar o campo de entrada
        }
    });

    document.getElementById('playAgain').addEventListener('click', function() {
        if (confirm('Você gostaria de jogar novamente?')) {
            randomNumber = generateRandomNumber(maxNumber);
            attempts = 0;
            document.getElementById('feedback').textContent = '';
            document.getElementById('guess').value = '';
            document.getElementById('playAgain').style.display = 'none';
        } else {
            window.location.href = 'index.html';
        }
    });

    function generateRandomNumber(max) {
        return Math.floor(Math.random() * max) + 1;
    }
});






