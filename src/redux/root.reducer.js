import { combineReducers } from "redux";
import { popularReducer } from "./popular/popular.reducer";
import { searchReducer } from "./popular/search.reducer";

const rootReducer = combineReducers({
  popularReducer: popularReducer,
  searchReducer: searchReducer,
});

export default rootReducer;
