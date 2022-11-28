import List from "./list/List";
import { useState } from "react";
import styled from "styled-components";
//import FavButton from "../../assets/FavButton";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EntriesSection({
  entries,
  onToggleFavourite,
  likedEntries,
}) {
  const [likeTab, setLikeTab] = useState(false);

  console.log(likeTab);

  function handleNoFav() {
    setLikeTab(false);
  }

  function handleFav() {
    setLikeTab(true);
  }

  return (
    <section>
      <StyledTabBar>
        <StyledTab primary={likeTab ? false : true} onClick={handleNoFav}>
          <span className="tab__count">{entries.length}</span>
          Beiträge
        </StyledTab>

        <StyledTab primary={likeTab ? true : false} onClick={handleFav}>
          <span className="tab__count">{likedEntries.length}</span>
          Favoriten
        </StyledTab>
      </StyledTabBar>
      <List
        entries={entries}
        onToggleFavourite={onToggleFavourite}
        likedEntries={likedEntries}
        likeTab={likeTab}
      />
    </section>
  );
}

const StyledTabBar = styled.div`
  display: flex;
  gap: 1.2rem;
  font-weight: bold;
  font-size: 1.1rem;
  border-bottom: 0.7px dashed var(--color-granite);
`;

const StyledTab = styled.button`
  border: 0.7px solid var(--color-granite);
  border-bottom: none;
  padding: 0.2rem 0.4rem;
  border-radius: 0.5rem 0.5rem 0 0;
  background-color: var(--color-foam);
  cursor: pointer;
  font-size: 1rem;
  opacity: ${(props) => (props.primary ? "100%" : "50%")};
  &:hover {
    background-color: var(--color-water-10);
  }
  span {
    margin-right: 0.3rem;
    background-color: black;
    display: inline-block;
    width: 1rem;
    border-radius: 100%;
    color: var(--color-foam);
    padding: 0.1rem;
    font-size: 0.8rem;
  }
`;
