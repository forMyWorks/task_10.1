import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchParams: "all",
  reposFilter: "",
  repos: [],
  reposCopy: [],
  loading: true,
  error: null,
  timeout: null,
  inputValue: "",
};

const popularSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {
    setSearchParamsAction: (store, action) => {
      store.searchParams = action.payload;
    },

    setLoadingAction: (store, action) => {
      store.loading = action.payload;
    },
    setReposFilterAction: (store, action) => {
      store.reposFilter = action.payload;
    },
    setReposAction: (store, action) => {
      store.repos = action.payload;
    },
    setReposCopyAction: (store, action) => {
      store.reposCopy = action.payload;
    },
    setErrorAction: (store, action) => {
      store.error = action.payload;
    },
    setMyTimeoutAction: (store, action) => {
      store.timeout = action.payload;
    },
    setInputValueAction: (store, action) => {
      store.inputValue = action.payload;
    },
  },
});

const { actions, reducer } = popularSlice;
export default reducer;
export const {
  setSearchParamsAction,
  setLoadingAction,
  setReposFilterAction,
  setReposAction,
  setReposCopyAction,
  setErrorAction,
  setMyTimeoutAction,
  setInputValueAction,
} = actions;
