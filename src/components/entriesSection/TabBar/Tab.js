import "./Tab.css";

export default function Tab({ name, number, icon, inActive }) {
  return (
    <span className={`tab ${inActive ? "tab--inactive" : ""}`}>
      {name} {number} {icon}
    </span>
  );
}
