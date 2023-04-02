import React from "react";
import { memo } from "react";
import { useSelector } from "react-redux";

import { IInitialState } from "../redux/popular/popular-slice";

interface IRrepo {
  [key: string]: any;
}

const List = memo((): JSX.Element => {
  const reposCopy = useSelector((state: IInitialState) => state.reposCopy);
  return (
    <ul className="popular-list">
      {reposCopy.map((repo: IRrepo, index: number) => {
        return (
          <li key={repo.name} className="popular-item">
            <div className="popular-rank">#{index + 1}</div>
            <ul className="space-list-items">
              <li>
                <img
                  className="avatar"
                  src={repo.owner.avatar_url}
                  alt="Avatar"
                />
              </li>
              <li>
                <a href={repo.html_url} rel="noreferrer" target="_blank">
                  {repo.name}
                </a>
              </li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count}</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
});
export default List;
