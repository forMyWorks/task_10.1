import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReposFilterAction } from "../redux/popular/popular-slice";
import { setMyTimeoutAction } from "../redux/popular/popular-slice";
import { setInputValueAction } from "../redux/popular/popular-slice";

import { IInitialState } from "../redux/popular/popular-slice";

const Search = (): JSX.Element => {
  const timeout: string = useSelector((store: IInitialState) => store.timeout);
  const inputValue: string = useSelector(
    (store: IInitialState) => store.inputValue
  );
  const dispatch = useDispatch();
  const onEscape = (event: any) => {
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

  const onMyChange = (event: any) => {
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
