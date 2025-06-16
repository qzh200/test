import { useState } from 'react';
import '../css/TicTacToe.css';

function TicTacToe(){
    const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
    const [gameBoard, setGameBoard] = useState<string[]>(Array(9).fill(''));
    const [gameActive, setGameActive] = useState(true);

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

    const handleCellClick = (clickedCellIndex: number) => {
        if (gameBoard[clickedCellIndex] !== '' || !gameActive) {
            return;
        }

        const newBoard = [...gameBoard];
        newBoard[clickedCellIndex] = currentPlayer;
        setGameBoard(newBoard);

        checkResult(newBoard);
    };

    const checkResult = (board: string[]) => {
        let roundWon = false;

        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];

            if (board[a] === '' || board[b] === '' || board[c] === '') {
                continue;
            }

            if (board[a] === board[b] && board[b] === board[c]) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            alert(`玩家 ${currentPlayer} 获胜!`);
            setGameActive(false);
            return;
        }

        if (!board.includes('')) {
            alert('平局!');
            setGameActive(false);
            return;
        }

        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    };

    const resetGame = () => {
        setCurrentPlayer('X');
        setGameBoard(Array(9).fill(''));
        setGameActive(true);
    };

    return (
        <div className="tic-tac-toe">
            <div className="top">
                <h2>游戏介绍：</h2>
                <p>
                    井字棋，英文名叫Tic-Tac-Toe，是一种在3*3格子上进行的连珠游戏，和五子棋类似，由于棋盘一般不画边框，格线排成井字故得名。游戏需要的工具仅为纸和笔，然后由分别代表O和X的两个游戏者轮流在格子里留下标记（一般来说先手者为X），任意三个标记形成一条直线，则为获胜。
                </p>
            </div>
            <div className="bottom">
                <h2>游戏规则：</h2>
                <p>
                    1. 游戏双方依次在格子里留下标记（一般来说，可以使用"X"和"O"），第一个在横、竖或斜对角方向形成线的人获胜；
                    <br />
                    2. 如果所有格子都被填满，游戏以平局结束。
                </p>
                <p>点击下方格子开始游戏</p>

                <table>
                    <tbody>
                        <tr>
                            {[0, 1, 2].map((index) => (
                                <td key={index}>
                                    <button
                                        id={index.toString()}
                                        onClick={() => handleCellClick(index)}
                                    >
                                        {gameBoard[index] && (
                                            <img
                                                src={`/src/png/${gameBoard[index] === 'X' ? 'fork' : 'circle'}.png`}
                                                width="60"
                                                height="60"
                                                alt={gameBoard[index]}
                                            />
                                        )}
                                    </button>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            {[3, 4, 5].map((index) => (
                                <td key={index}>
                                    <button
                                        id={index.toString()}
                                        onClick={() => handleCellClick(index)}
                                    >
                                        {gameBoard[index] && (
                                            <img
                                                src={`/src/png/${gameBoard[index] === 'X' ? 'fork' : 'circle'}.png`}
                                                width="60"
                                                height="60"
                                                alt={gameBoard[index]}
                                            />
                                        )}
                                    </button>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            {[6, 7, 8].map((index) => (
                                <td key={index}>
                                    <button
                                        id={index.toString()}
                                        onClick={() => handleCellClick(index)}
                                    >
                                        {gameBoard[index] && (
                                            <img
                                                src={`/src/png/${gameBoard[index] === 'X' ? 'fork' : 'circle'}.png`}
                                                width="60"
                                                height="60"
                                                alt={gameBoard[index]}
                                            />
                                        )}
                                    </button>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
                <button id="reset" onClick={resetGame}>重置游戏</button>
            </div>
        </div>
    );
}
export default TicTacToe;