import List from "./list/List";
import Item from "./list/item/Item";
import TabBar from "./TabBar/TabBar";
import Tab from "./TabBar/Tab";
import Star from "../../assets/star";
import StarFilled from "../../assets/star-filled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EntriesSection() {
  return (
    <section>
      <TabBar>
        <Tab name="TAB" number={1} icon={<Star width={18} height={18} />} />
        <Tab
          name="TAB"
          number={2}
          icon={<StarFilled width={18} height={18} />}
        />
      </TabBar>
      <List>
        <Item
          date="01.01.2022"
          title="Item eins"
          text="Dies ist ein Fließtext"
          icon={<FontAwesomeIcon icon="fas fa-sun" />}
        />
        <Item
          date="05.05.2023"
          title="Item zwei"
          text="Dies ist ein Fließtext Dies ist ein Fließtext Dies ist ein Fließtext Dies ist ein Fließtext Dies ist ein Fließtext Dies ist ein Fließtext Dies ist ein Fließtext Dies ist ein Fließtext Dies ist ein Fließtext"
          icon={<FontAwesomeIcon icon="fas fa-cloud-rain" />}
        />
        <Item
          date="01.01.2000"
          title="Item drei"
          text="Dies ist ein Fließtext"
          icon={<FontAwesomeIcon icon="fas fa-grin-tears" bounce />}
        />
      </List>
    </section>
  );
}
