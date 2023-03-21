const initialState = {
  searchParams: "all",
  reposFilter: "",
  repos: [],
  reposCopy: [],
  loading: true,
  error: null,
};

export const popularReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_LANGUAGE":
      return { ...state, searchParams: action.payload };
    case "SET_REPOS_FILTER":
      return { ...state, reposFilter: action.payload };
    case "SET_REPOS":
      return { ...state, repos: action.payload };
    case "SET_REPOS_COPY":
      return { ...state, reposCopy: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
