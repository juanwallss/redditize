import { configureStore } from '@reduxjs/toolkit';
import redditReducer from './redditSlice';
import subredditReducer from './subredditSlice';


export const store = configureStore({
  reducer: {
    reddit: redditReducer,
    subreddits: subredditReducer,
  },
});
