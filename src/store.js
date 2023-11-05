import { configureStore } from '@reduxjs/toolkit';
import { gameSlice } from './reduxToolkit'; // Import gameSlice dari reduxToolkit

const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
  },
});

export default store;
