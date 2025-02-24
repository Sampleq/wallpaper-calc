import { createSlice } from '@reduxjs/toolkit';

const initialState = true;

const showDescriptionSlice = createSlice({
  initialState,
  name: 'showDescription',

  reducers: {
    toggleShowDescription: function (state) {
      return !state;
    },
  },
});

export const { toggleShowDescription } = showDescriptionSlice.actions;

export function selectShowDescription(state) {
  return state.showDescription;
}

export default showDescriptionSlice.reducer;
