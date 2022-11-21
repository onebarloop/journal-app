import List from "./list/List";
import Item from "./list/item/Item";
import TabBar from "./TabBar/TabBar";
import Tab from "./TabBar/Tab";
//import FavButton from "../../assets/FavButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EntriesSection() {
  return (
    <section>
      <TabBar>
        <Tab name="TAB" number={1} icon={<FontAwesomeIcon icon="sun" />} />
        <Tab
          name="TAB"
          number={2}
          icon={<FontAwesomeIcon icon="cloud-rain" />}
        />
      </TabBar>
      <List>
        <Item
          date="01.01.2022"
          title="Item eins"
          text="Dies ist ein Fließtext"
        />
        <Item
          date="05.05.2023"
          title="Item zwei"
          text="Dies ist ein Fließtext Dies ist ein Fließtext Dies ist ein Fließtext Dies ist ein Fließtext Dies ist ein Fließtext Dies ist ein Fließtext Dies ist ein Fließtext Dies ist ein Fließtext Dies ist ein Fließtext"
        />
        <Item
          date="01.01.2000"
          title="Item drei"
          text="Dies ist ein Fließtext"
        />
      </List>
    </section>
  );
}
