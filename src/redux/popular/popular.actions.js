export const setSearchParamsAction = (payload) => {
  return {
    type: "SET_LANGUAGE",
    payload,
  };
};
export const setReposFilterAction = (payload) => {
  return {
    type: "SET_REPOS_FILTER",
    payload,
  };
};
export const setLoadingAction = (payload) => {
  return {
    type: "SET_LOADING",
    payload,
  };
};
export const setReposAction = (payload) => {
  return {
    type: "SET_REPOS",
    payload,
  };
};
export const setReposCopyAction = (payload) => {
  return {
    type: "SET_REPOS_COPY",
    payload,
  };
};
export const setErrorAction = (payload) => {
  return {
    type: "SET_ERROR",
    payload,
  };
};
