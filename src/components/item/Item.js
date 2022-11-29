import styled from "styled-components";
import FavButton from "../FavButton/FavButton";

export default function Item({
  title,
  text,
  date,
  id,
  isFavourite,
  onToggleFavourite,
}) {
  return (
    <StyledEntry>
      <p className="date">{date}</p>
      <p className="title">
        {title}
        <FavButton
          id={id}
          isFavourite={isFavourite}
          onToggleFavourite={onToggleFavourite}
        />
      </p>

      <p className="text">{text}</p>
    </StyledEntry>
  );
}

const StyledEntry = styled.li`
  padding: 0.2rem;
  margin: 1rem 0;
  .title {
    font-weight: bold;
    margin: 0;
    margin-right: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .date {
    font-size: 0.8rem;
    margin: 0.2rem 0;
  }
  .text {
    margin-top: 0.5rem;
  }
`;
