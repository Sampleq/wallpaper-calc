import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  room: {
    length: 0,
    width: 0,
    height: 0,
  },

  rollSquare: 1.06 * 10,

  rapport: 0,

  windows: [
    // example
    {
      heigth: 0,
      width: 0,
    },
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
  },
});

export const { resetUserOptions } = userOptionsSlice.actions;

export default userOptionsSlice.reducer;
