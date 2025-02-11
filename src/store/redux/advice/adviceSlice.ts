import { createAppSlice } from "store/createAppSlice";
import { AdviceState } from "./types";
import axios from "axios";

const adviceInitialState: AdviceState = {
  advices: [],
  status: "default",
  error: undefined,
};

export const adviceSlice = createAppSlice({
  name: "ADVICE",
  initialState: adviceInitialState,

  reducers: (create) => ({
    getAdvice: create.asyncThunk(
      async () => {
        const response = await axios.get("https://api.adviceslip.com/advice");
        return response.data.slip.advice;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.advices.push(action.payload);
          state.status = "success";
        },
        rejected: (state, action) => {
          state.error = action.error.message || "Something went wrong";
          state.status = "error";
        }
      }
    ),

    deleteAllAdvices: create.reducer((state) => {
      state.advices = [];
    })
  }),

  selectors: {
    adviceData: (state: AdviceState) => state, 
  }
  
});

export default adviceSlice.reducer;
export const adviceActions = adviceSlice.actions;
export const adviceSelectors = adviceSlice.selectors;
