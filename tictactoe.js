// 游戏状态
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// 获胜条件
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// 处理单元格点击
function handleCellClick(clickedCellIndex) {
    if (gameBoard[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    gameBoard[clickedCellIndex] = currentPlayer;
    document.getElementById(clickedCellIndex).innerHTML =
        `<img src="png/${currentPlayer === 'X' ? 'fork' : 'circle'}.png" width="60" height="60" alt={currentPlayer === 'X' ? 'fork' : 'circle'}>`;

    checkResult();
}

// 检查游戏结果
function checkResult() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];

        if (gameBoard[a] === '' || gameBoard[b] === '' || gameBoard[c] === '') {
            continue;
        }

        if (gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        alert(`玩家 ${currentPlayer} 获胜!`);
        gameActive = false;
        return;
    }

    if (!gameBoard.includes('')) {
        alert('平局!');
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// 重置游戏
function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    document.querySelectorAll('td > button').forEach(cell => {
        cell.innerHTML = '';
    });
}

//初始化游戏
function initGame() {
    document.querySelectorAll('button').forEach((cell, index) => {
        cell.addEventListener('click', () => handleCellClick(index));
    });
    document.getElementById('reset').addEventListener('click', resetGame);
}

// 当DOM加载完成后初始化游戏
document.addEventListener('DOMContentLoaded', initGame);