import {useState} from 'react';
import {Typography, Row, Col, Card, Button, Space} from 'antd';
import CustomHeader from './header';

const {Title, Text} = Typography;


function TicTacToe() {
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
        <>
                <CustomHeader>
                </CustomHeader>
                <Space direction="vertical" size="large" style={{width: '100%'}}>
                    <Card title="游戏介绍" style={{width: '100%'}}>
                        <Text>
                            井字棋，英文名叫Tic-Tac-Toe，是一种在3*3格子上进行的连珠游戏，和五子棋类似，由于棋盘一般不画边框，格线排成井字故得名。游戏需要的工具仅为纸和笔，然后由分别代表O和X的两个游戏者轮流在格子里留下标记（一般来说先手者为X），任意三个标记形成一条直线，则为获胜。
                        </Text>
                    </Card>

                    <Card title="游戏规则" style={{width: '100%'}}>
                        <Text>
                            1. 游戏双方依次在格子里留下标记（一般来说，可以使用"X"和"O"），第一个在横、竖或斜对角方向形成线的人获胜；
                            <br/>
                            2. 如果所有格子都被填满，游戏以平局结束。
                        </Text>
                    </Card>
                </Space>

                <Space direction="vertical" size="large" style={{width: '100%', marginTop: '24px'}}>
                    <Title level={4} style={{textAlign: 'center'}}>当前玩家: {currentPlayer}</Title>

                    <Row justify="center" gutter={[16, 16]} style={{maxWidth: '500px', margin: '0 auto'}}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                            <Col span={8} key={index}>
                                <Button
                                    type="text"
                                    style={{
                                        width: '100%',
                                        height: '80px',
                                        fontSize: '24px',
                                        border: '1px solid #d9d9d9'
                                    }}
                                    onClick={() => handleCellClick(index)}
                                    disabled={gameBoard[index] !== '' || !gameActive}
                                >
                                    {gameBoard[index] && (
                                        <img
                                            src={`/src/png/${gameBoard[index] === 'X' ? 'fork' : 'circle'}.png`}
                                            width="60"
                                            height="60"
                                            alt={gameBoard[index]}
                                        />
                                    )}
                                </Button>
                            </Col>
                        ))}
                    </Row>

                    <Button
                        type="primary"
                        size="large"
                        style={{display: 'block', margin: '24px auto'}}
                        onClick={resetGame}
                    >
                        重置游戏
                    </Button>
                </Space>
        </>
    );
}

export default TicTacToe;