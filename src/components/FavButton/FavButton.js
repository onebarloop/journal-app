import StarFilled from "../../assets/star-filled";
import Star from "../../assets/star";
import styled from "styled-components";

export default function FavButton({ onToggleFavourite, isFavourite, id }) {
  return (
    <StyledFavIcon onClick={() => onToggleFavourite(id)}>
      {isFavourite ? (
        <StarFilled width={18} height={18} />
      ) : (
        <Star width={18} height={18} />
      )}
    </StyledFavIcon>
  );
}

const StyledFavIcon = styled.span`
  cursor: pointer;
  color: black;
  &:active {
    color: var(--color-nemo-dark);
  }
`;
