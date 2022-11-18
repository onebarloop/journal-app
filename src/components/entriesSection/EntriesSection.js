import Item from "./Item";
import TabBar from "./TabBar/TabBar";
import Tab from "./TabBar/Tab";
import "./EntriesSection.css";
import Star from "../../assets/star";

export default function EntriesSection() {
  return (
    <>
      <TabBar>
        <Tab name="TAB" number={1} icon={<Star width={18} height={18} />} />
        <Tab name="TAB" number={2} icon={<Star width={18} height={18} />} />
      </TabBar>
      <ul className="list">
        <Item
          title="Item eins"
          text="Dies ist ein Fließtext"
          icon={<Star width={24} height={24} />}
        />
        <Item title="Item zwei" text="Dies ist ein Fließtext" />
        <Item
          title="Item drei"
          text="Dies ist ein Fließtext"
          icon={<Star width={24} height={24} />}
        />
      </ul>
    </>
  );
}
