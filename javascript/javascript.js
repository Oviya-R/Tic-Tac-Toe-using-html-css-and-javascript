const squares = document.querySelectorAll('.square');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let gameActive = true;
function checkWin() {
    const winningCombinations = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]  
    ];
for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (squares[a].textContent && squares[a].textContent === squares[b].textContent && squares[a].textContent === squares[c].textContent) {
            return squares[a].textContent; 
        }
    }
return null; 
}
function handleClick(event) {
    const square = event.target;
    
    if (square.textContent || !gameActive) return; 

    square.textContent = currentPlayer;
    
    const winner = checkWin();
    if (winner) {
        setTimeout(() => alert(`${winner} wins!`), 10);
        gameActive = false;
        return;
    }
    if ([...squares].every(square => square.textContent)) {
        setTimeout(() => alert('It\'s a draw!'), 10);
        gameActive = false;
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
function resetGame() {
    squares.forEach(square => square.textContent = '');
    currentPlayer = 'X';
    gameActive = true;
}
squares.forEach(square => {
    square.addEventListener('click', handleClick);
});
resetButton.addEventListener('click', resetGame);
