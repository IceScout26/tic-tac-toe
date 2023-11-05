import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { gameSlice } from "./reduxToolkit"; // Import gameSlice dari reduxToolkit
import { Button, Text, Grid, GridItem } from "@chakra-ui/react"; // Impor komponen Chakra UI yang diperlukan
import "./App.css";

function Board() {
  const squares = useSelector((state) => state.game.squares);
  const status = useSelector((state) => state.game.status);
  const dispatch = useDispatch();

  function renderSquare(i) {
    return (
      <Button
        bg="blue.500"
        color="white"
        fontWeight="bold"
        p="2"
        rounded="md"
        onClick={() => dispatch(gameSlice.actions.selectSquare(i))}
      >
        {squares[i]}
      </Button>
    );
  }

  return (
    <div className="text-center my-8">
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        STATUS: {status}
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap="4">
        <GridItem>{renderSquare(0)}</GridItem>
        <GridItem>{renderSquare(1)}</GridItem>
        <GridItem>{renderSquare(2)}</GridItem>
        <GridItem>{renderSquare(3)}</GridItem>
        <GridItem>{renderSquare(4)}</GridItem>
        <GridItem>{renderSquare(5)}</GridItem>
        <GridItem>{renderSquare(6)}</GridItem>
        <GridItem>{renderSquare(7)}</GridItem>
        <GridItem>{renderSquare(8)}</GridItem>
      </Grid>
      <Button
        bg="red.500"
        color="white"
        fontWeight="bold"
        p="2"
        mt="4"
        rounded="md"
        onClick={() => dispatch(gameSlice.actions.reset())}
      >
        Restart
      </Button>
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
