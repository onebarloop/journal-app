import "./Item.css";
import FavButton from "./FavButton";

export default function Item({
  title,
  text,
  date,
  id,
  isFavourite,
  onToggleFavourite,
}) {
  return (
    <li className="item">
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
    </li>
  );
}
