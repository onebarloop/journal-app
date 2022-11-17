import Item from "./Item";
import TabBar from "./TabBar/TabBar";
import Tab from "./TabBar/Tab";
import "./EntriesSection.css";
import Icon from "../../assets/star";

export default function EntriesSection() {
  return (
    <>
      <TabBar>
        <Tab name="TAB" number={1} />
        <Tab name="TAB" number={2} />
      </TabBar>
      <ul className="list">
        <Item title="Item eins" text="Dies ist ein Fließtext" icon={<Icon />} />
        <Item title="Item zwei" text="Dies ist ein Fließtext" />
        <Item title="Item drei" text="Dies ist ein Fließtext" icon={<Icon />} />
      </ul>
    </>
  );
}
