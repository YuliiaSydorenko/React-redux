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
    // способ 1 - перезапись свойств
    resetFeedback: create.reducer((state) => {
      state.likes = 0;
      state.dislikes = 0;
      // способ 2 - возвращаем начальное состояние (вместо перезаписи свойств)
      // return feedbackInitialState;
      // resetResults: create.reducer((state) => {
      // feedbackInitialState;
      // если в объекте несколько свойств, то лучше возвращать начальное состояние

    }),
  }),
  selectors: {
    feedbackValue: (state) => state,
  },
});

export const feedbackActions = feedbackSlice.actions;
export const feedbackSelectors = feedbackSlice.selectors;
