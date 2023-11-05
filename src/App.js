import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { gameSlice } from "./reduxToolkit"; // Import gameSlice dari reduxToolkit
import "./App.css";

function Board() {
  const squares = useSelector((state) => state.game.squares);
  const status = useSelector((state) => state.game.status);
  const dispatch = useDispatch();

  function renderSquare(i) {
    return (
      <button
        className="square"
        onClick={() => dispatch(gameSlice.actions.selectSquare(i))}
      >
        {squares[i]}
      </button>
    );
  }

  return (
    <div>
      <div>STATUS: {status}</div>
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button onClick={() => dispatch(gameSlice.actions.reset())}>
        Restart
      </button>
    </div>
  );
}

function Game() {
  return (
    <div>
      <div>
        <Board />
      </div>
    </div>
  );
}

function App() {
  return <Game />;
}

export default App;
