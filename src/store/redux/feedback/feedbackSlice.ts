import { createAppSlice } from "../../createAppSlice";

const feedbackInitialState = {
  likes: 0,
  dislikes: 0,
};

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: (create) => ({
    addLike: create.reducer((state) => {
      state.likes += 1;
    }),
    addDislike: create.reducer((state) => {
      state.dislikes += 1;
    }),
    resetFeedback: create.reducer((state) => {
      state.likes = 0;
      state.dislikes = 0;
    }),
  }),
  selectors: {
    feedbackValue: (state) => state,
  },
});

export const feedbackActions = feedbackSlice.actions;
export const feedbackSelectors = feedbackSlice.selectors;
