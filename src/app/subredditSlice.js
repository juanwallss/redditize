import { createSlice } from '@reduxjs/toolkit';
import { getSubreddits } from '../api/reddit';

const subredditSlice = createSlice({
    name: 'subreddits',
    initialState: {
      subreddits: [],
      error: false,
      isLoading: false,
    },
    reducers: {
      startGetSubreddits(state) {
        state.isLoading = true;
        state.error = false;
      },
      getSubredditsSuccess(state, action) {
        state.isLoading = false;
        state.subreddits = action.payload;
      },
      getSubredditsFailed(state) {
        state.isLoading = false;
        state.error = true;
      },
    },
  });
  
  export const {
    getSubredditsFailed,
    getSubredditsSuccess,
    startGetSubreddits,
  } = subredditSlice.actions;
  
  export default subredditSlice.reducer;
  export const selectSubreddits = (state) => state.subreddits.subreddits;

  // This Redux Thunk helps us to get subreddits
  export const fetchSubreddits = () => async (dispatch) => {
    try {
      dispatch(startGetSubreddits());
      const subreddits = await getSubreddits();
      dispatch(getSubredditsSuccess(subreddits));
    } catch (error) {
      dispatch(getSubredditsFailed());
    }
  };