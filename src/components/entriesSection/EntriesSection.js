import Item from "./Item";
import TabBar from "./TabBar";
import Tab from "./Tab";

export default function EntriesSection() {
  return (
    <>
      <TabBar>
        <Tab name="TAB 1" />
        <Tab name="TAB 2" />
      </TabBar>
      <ul>
        <Item title="test" />
      </ul>
    </>
  );
}
