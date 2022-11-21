import List from "./list/List";
import TabBar from "./TabBar/TabBar";
import Tab from "./TabBar/Tab";
//import FavButton from "../../assets/FavButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EntriesSection() {
  return (
    <section>
      <TabBar>
        <Tab name="TAB" number={1} icon={<FontAwesomeIcon icon="sun" spin />} />
        <Tab
          name="TAB"
          number={2}
          icon={<FontAwesomeIcon icon="cloud-rain" flip />}
        />
      </TabBar>
      <List />
    </section>
  );
}
