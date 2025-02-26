import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  room: {
    length: 10,
    width: 20,
    height: 3,
  },

  rollSquare: 1.06 * 10,

  rapport: 0,

  windows: [
    // // example
    // {
    //   heigth: 0,
    //   width: 0,
    // },
  ],
  doors: [
    // example
    {
      heigth: 0,
      width: 0,
    },
  ],
};

const userOptionsSlice = createSlice({
  initialState,
  name: 'userOptions',

  reducers: {
    resetUserOptions: function () {
      return initialState;
    },

    setRoomLength: function (state, action) {
      state.room.length = action.payload; // возможно благодаря immer
    },
    setRoomWidth: function (state, action) {
      state.room.width = action.payload;
    },
    setRoomHeight: function (state, action) {
      state.room.height = action.payload;
    },

    setRollSquareOptions: function (state, action) {
      state.rollSquare = action.payload;
    },

    setRapportOptions: function (state, action) {
      state.rapport = action.payload;
    },

    addWindow: function (state, action) {
      state.windows.push(action.payload);
      // возможно благодаря immer
    },
    deleteWindow: function (state, action) {
      state.windows = state.windows.filter(
        window => window.id !== action.payload
      );
    },
  },
});

export const {
  resetUserOptions,
  setRoomLength,
  setRoomWidth,
  setRoomHeight,
  setRollSquareOptions,
  setRapportOptions,
  addWindow,
  deleteWindow,
} = userOptionsSlice.actions;

// callbacks for useSelector()
export function selectRoomOptions(state) {
  return state.userOptions.room;
}
export function selectRollSquareOptions(state) {
  return state.userOptions.rollSquare;
}
export function selectRapportOptions(state) {
  return state.userOptions.rapport;
}
export function selectWindowsOptions(state) {
  return state.userOptions.windows;
}

export default userOptionsSlice.reducer;
