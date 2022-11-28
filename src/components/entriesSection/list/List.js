import Item from "./item/Item";
import Divider from "../../divider/Divider";
import styled from "styled-components";
import { Fragment } from "react";

export default function List({
  entries,
  onToggleFavourite,
  likedEntries,
  likeTab,
}) {
  const [lastItem] = entries.slice(-1);
  return !likeTab ? (
    <StyledList>
      {entries.map((entry) => (
        <Fragment key={entry.id}>
          <Item
            title={entry.motto}
            text={entry.notes}
            date={entry.date}
            id={entry.id}
            isFavourite={entry.isFavourite}
            onToggleFavourite={onToggleFavourite}
          />
          {entry === lastItem ? "" : <Divider />}
        </Fragment>
      ))}
    </StyledList>
  ) : (
    <StyledList>
      {likedEntries.map((entry) => (
        <Fragment key={entry.id}>
          <Item
            title={entry.motto}
            text={entry.notes}
            date={entry.date}
            id={entry.id}
            isFavourite={entry.isFavourite}
            onToggleFavourite={onToggleFavourite}
          />
          {entry === lastItem ? "" : <Divider />}
        </Fragment>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  padding-top: 0.4rem;
  margin-top: 0.3rem;
`;
