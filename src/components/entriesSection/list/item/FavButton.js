import { useState } from "react";
import StarFilled from "../../../../assets/star-filled";
import Star from "../../../../assets/star";

export default function FavButton() {
  const [isFavourite, setFavourite] = useState(false);

  function handleClick() {
    setFavourite(!isFavourite);
  }
  console.log(isFavourite);
  return (
    <span className="icon" onClick={handleClick}>
      {isFavourite ? (
        <StarFilled width={18} height={18} />
      ) : (
        <Star width={18} height={18} />
      )}
    </span>
  );
}
