import "./List.css";
import Item from "./item/Item";
import Divider from "../../divider/Divider";
import { Fragment } from "react";

export default function List({ entries, isFavourite, onToggleFavourite }) {
  const [lastItem] = entries.slice(-1);
  return (
    <ul className="list">
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
    </ul>
  );
}

/*const entries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: 😍",
  },
];*/
