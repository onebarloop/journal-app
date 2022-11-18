import "./Item.css";

export default function Item({ title, text, date, icon }) {
  return (
    <>
      <li className="item">
        <p className="date">{date}</p>
        <p className="title">
          {title}
          {icon}
        </p>

        <p className="text">{text}</p>
      </li>
    </>
  );
}
