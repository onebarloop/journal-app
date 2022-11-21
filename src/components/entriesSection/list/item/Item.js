import "./Item.css";
import FavButton from "../../../../assets/FavButton";

export default function Item({ title, text, date }) {
  return (
    <>
      <li className="item">
        <p className="date">{date}</p>
        <p className="title">
          {title}
          <FavButton />
        </p>

        <p className="text">{text}</p>
      </li>
    </>
  );
}
