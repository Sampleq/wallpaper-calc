import { createSlice } from '@reduxjs/toolkit';

const initialState = null;
// {
//     rollsNumber: 0,
//     wallpaperSquare: 0,
//     area: 0,
// }

const resultsSlice = createSlice({
  initialState,
  name: 'results',

  reducers: {
    calculateResults: function (state, action) {
      // make calculation with userOptions

      return {
        rollsNumber: 10,
        wallpaperSquare: 100,
        area: 200,
      };
    },

    resetResults: function () {
      return initialState;
    },
  },
});

export const { calculateResults, resetResults } = resultsSlice.actions;

export function selectResults(state) {
  return state.results;
}

export default resultsSlice.reducer;
