import StarFilled from "../../../../assets/star-filled";
import Star from "../../../../assets/star";

export default function FavButton({ onToggleFavourite, isFavourite, id }) {
  console.log(isFavourite);
  return (
    <span className="icon" onClick={() => onToggleFavourite(id)}>
      {isFavourite ? (
        <StarFilled width={18} height={18} />
      ) : (
        <Star width={18} height={18} />
      )}
    </span>
  );
}
