import "./Tab.css";

export default function Tab({ name, number, icon }) {
  return (
    <span className="tab">
      {name} {number} {icon}
    </span>
  );
}
