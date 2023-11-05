import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { gameSlice } from "./reduxToolkit";
import { Button, Text, Grid, GridItem, Center } from "@chakra-ui/react";
import "./App.css";

function Board() {
  const squares = useSelector((state) => state.game.squares);
  const status = useSelector((state) => state.game.status);
  const dispatch = useDispatch();

  function renderSquare(i) {
    return (
      <Button
        _hover={{
          bgColor: "blue.200",
          color: "red",
          borderRadius: 0,
        }}
        textShadow="1px 1px #ff0000"
        bg="yellow.500"
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
    <Center h="100vh" flexDirection="column">
      <Center
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mb="4"
      >
        <Text fontSize="2xl" fontWeight="bold">
          {status}
        </Text>
      </Center>
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
      <Center justifyContent="center" alignItems="center" mt="4">
        <Button
          bg="red.500"
          color="white"
          fontWeight="bold"
          p="2"
          rounded="md"
          onClick={() => dispatch(gameSlice.actions.reset())}
        >
          Restart
        </Button>
      </Center>
    </Center>
  );
}

function Game() {
  return (
    <div>
      <Board />
    </div>
  );
}

function App() {
  return <Game />;
}

export default App;
