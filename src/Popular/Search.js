import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReposFilterAction } from "../redux/popular/popular.actions";
import { setMyTimeoutAction } from "../redux/popular/search.actions";
import { setInputValueAction } from "../redux/popular/search.actions";

const Search = () => {
  const timeout = useSelector((store) => store.searchReducer.timeout);
  const inputValue = useSelector((store) => store.searchReducer.inputValue);
  const dispatch = useDispatch();
  const onEscape = (event) => {
    if (event.code === "Escape") {
      dispatch(setReposFilterAction(""));
      dispatch(setInputValueAction(""));
      document.removeEventListener("keydown", onEscape);
    }
  };
  document.addEventListener("keydown", onEscape);

  useEffect(() => {
    dispatch(setInputValueAction(""));
    dispatch(setReposFilterAction(inputValue));
  }, []);

  const onMyChange = (event) => {
    dispatch(setInputValueAction(event.target.value.replace(/\W|\d/g, "")));
    clearTimeout(timeout);
    dispatch(
      setMyTimeoutAction(
        setTimeout(() => {
          dispatch(
            setReposFilterAction(event.target.value.replace(/\W|\d/g, ""))
          );
        }, 1000)
      )
    );
    // clearTimeout(timeout);
  };

  return (
    <>
      <input
        className="input-search"
        value={inputValue}
        onChange={onMyChange}
        placeholder="Search..."
      />
    </>
  );
};
export default Search;
