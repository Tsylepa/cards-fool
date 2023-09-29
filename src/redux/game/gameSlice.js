import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [
    {
      id: 0,
      name: "Bond",
      cards: [],
    },
    {
      id: 1,
      name: "Goldfinger",
      cards: [],
    },
  ],
  deck: [],
  trump: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateDeck(state, action) {
      state.deck = action.payload;
    },
    updatePlayers(state, action) {
      state.players = action.payload;
    },
    updateTrump(state) {
      state.trump = state.deck[state.deck.length - 1].suit;
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const { updateDeck, updatePlayers, updateTrump } = gameSlice.actions;
