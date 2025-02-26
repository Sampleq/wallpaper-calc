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
      const userOptions = action.payload;

      const {
        length: roomLength,
        width: roomWidth,
        height: roomHeight,
      } = userOptions.room;
      //   console.log(roomLength, roomWidth, roomHeight);

      const rapport = userOptions.rapport;

      const windows = userOptions.windows;

      // calculate results:
      const windowsSquare = windows.reduce((acc, window) => {
        return (acc += window.height * window.width);
      }, 0);
      // console.log('windowsSquare', windowsSquare);

      const wallsSquare =
        (+roomLength * +roomHeight + +roomWidth * +roomHeight) * 2 -
        windowsSquare;
      //   console.log('wallsSquare', wallsSquare);
      const rollSquare = +userOptions.rollSquare - (rapport * 1.06) / 2; // примерно учитываем раппорт (1.06 - ширина рулона)
      console.log('rollSquare', rollSquare);

      const rollsNumber = Math.ceil(wallsSquare / rollSquare);

      return {
        rollsNumber,
        wallpaperSquare: rollsNumber * rollSquare,
        coveredArea: wallsSquare,
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
