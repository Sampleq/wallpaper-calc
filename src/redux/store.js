import { configureStore } from '@reduxjs/toolkit';

import showDescriptionReducer from './slices/showDescriptionSlice';
import userOptionsReducer from './slices/userOptionsSlice';
import resultsReducer from './slices/resultsSlice';

const store = configureStore({
  reducer: {
    showDescription: showDescriptionReducer,
    userOptions: userOptionsReducer,
    results: resultsReducer,
  },
});

export default store;
