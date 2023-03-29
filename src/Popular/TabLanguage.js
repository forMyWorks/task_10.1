import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { setSearchParamsAction } from "../redux/popular/popular.slice";
import { setLoadingAction } from "../redux/popular/popular.slice";
import { setReposAction } from "../redux/popular/popular.slice";
import { setReposCopyAction } from "../redux/popular/popular.slice";
import { setErrorAction } from "../redux/popular/popular.slice";

import { fetchPopularRepos } from "../api";
import List from "./List";
import Search from "./Search";

const tabsLanguage = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];
const lowerTabsLanguage = tabsLanguage.map((item) => {
  return item.toLocaleLowerCase();
});

// eslint-disable-next-line
export default () => {
  const dispatch = useDispatch();
  const searchParams = useSelector((state) => state.searchParams);
  const reposFilter = useSelector((state) => state.reposFilter);
  const loading = useSelector((state) => state.loading);
  const repos = useSelector((state) => state.repos);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(setLoadingAction(true));
    fetchPopularRepos(searchParams)
      .then((data) => {
        dispatch(setReposAction(data));
        dispatch(setReposCopyAction(data));
      })
      .catch((error) => dispatch(setErrorAction(error)))
      .finally(() => dispatch(setLoadingAction(false)));
  }, [searchParams]);

  useEffect(() => {
    searchEmp(reposFilter, repos);
  }, [reposFilter]);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(setSearchParamsAction(event.target.textContent.toLowerCase()));
  }

  const active =
    lowerTabsLanguage.indexOf(searchParams) !== -1
      ? lowerTabsLanguage.indexOf(searchParams)
      : null;

  const searchEmp = (searchStr, dataFilter) => {
    if (searchStr.length <= 0) {
      dispatch(setReposCopyAction(repos));
      return;
    }
    dispatch(
      setReposCopyAction(
        dataFilter.filter((item) => {
          return item.name.toLowerCase().indexOf(searchStr) !== -1;
        })
      )
    );
  };

  return (
    <>
      <Tabs defaultIndex={active || 0}>
        <TabList>
          {tabsLanguage.map((item, index) => {
            return (
              <Tab key={index} onClick={handleSubmit}>
                {item}
              </Tab>
            );
          })}
        </TabList>

        {tabsLanguage.map((item, index) => (
          <TabPanel key={index}>
            {!loading ? null : <h3>Wait, soon the list of {item}...</h3>}
            {!error ? null : <h3>{error}</h3>}
          </TabPanel>
        ))}
      </Tabs>

      {!loading ? (
        <>
          <Search />
          <List />
        </>
      ) : null}
    </>
  );
};
