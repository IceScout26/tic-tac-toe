import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    squares: Array(9).fill(null),
    status: 'Next player: X',
  },
  reducers: {
    selectSquare: (state, action) => {
      const { squares, status } = state;
      const squareIndex = action.payload;
      if (squares[squareIndex] || calculateWinner(squares)) {
        return; // Jangan lakukan apa-apa jika kotak sudah terisi atau permainan sudah dimenangkan
      }

      squares[squareIndex] = status.includes('X') ? 'X' : 'O';
      state.squares = squares;
      state.status = calculateStatus(squares, calculateWinner(squares));
    },
    reset: (state) => {
      state.squares = Array(9).fill(null);
      state.status = 'Next player: X';
    },
  },
});

// Fungsi utilitas seperti calculateWinner, calculateStatus, dan calculateNextValue
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

function calculateStatus(squares, winner) {
  if (winner) {
    return `Winner: ${winner}`;
  } else if (squares.every(Boolean)) {
    return "Scratch: Cat's game";
  } else {
    return `Next player: ${calculateNextValue(squares)}`;
  }
}

function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
}
