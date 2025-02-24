import { configureStore } from '@reduxjs/toolkit';

import showDescriptionReducer from './slices/showDescriptionSlice';

const store = configureStore({
  reducer: {
    showDescription: showDescriptionReducer,
  },
});

export default store;
