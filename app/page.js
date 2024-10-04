"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const react_1 = require("react");
function Home() {
    const [board, setBoard] = (0, react_1.useState)(Array(9).fill(null));
    const [xIsNext, setXIsNext] = (0, react_1.useState)(true);
    const winner = calculateWinner(board);
    const handleClick = (index) => {
        if (winner || board[index])
            return;
        const newBoard = [...board];
        newBoard[index] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);
    };
    const renderSquare = (index) => (<div className="w-20 h-20 bg-white border border-gray-300 flex items-center justify-center text-4xl font-bold cursor-pointer" onClick={() => handleClick(index)}>
      {board[index]}
    </div>);
    const renderStatus = () => {
        if (winner) {
            return `Winner: ${winner}`;
        }
        else if (board.every((square) => square !== null)) {
            return `Draw!`;
        }
        else {
            return `Next player: ${xIsNext ? 'X' : 'O'}`;
        }
    };
    return (<div className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (<div key={index}>{renderSquare(index)}</div>))}
      </div>
      <div className="text-2xl mb-4">{renderStatus()}</div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
            setBoard(Array(9).fill(null));
            setXIsNext(true);
        }}>
        Reset
      </button>
    </div>);
}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
//# sourceMappingURL=page.js.map