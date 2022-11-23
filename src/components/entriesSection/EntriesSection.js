import List from "./list/List";
import TabBar from "./TabBar/TabBar";
import { useState } from "react";
//import FavButton from "../../assets/FavButton";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EntriesSection({
  entries,
  onToggleFavourite,
  likedEntries,
}) {
  const [likeTab, setLikeTab] = useState(false);

  console.log(likeTab);

  function handleNoFav() {
    setLikeTab(false);
  }

  function handleFav() {
    setLikeTab(true);
  }

  return (
    <section>
      <TabBar>
        <button
          className={`tab ${likeTab ? "tab--inactive" : ""}`}
          onClick={handleNoFav}
        >
          <span className="tab__count">{entries.length}</span>
          Beiträge
        </button>

        <button
          className={`tab ${likeTab ? "" : "tab--inactive "}`}
          onClick={handleFav}
        >
          <span className="tab__count">{likedEntries.length}</span>
          Favoriten
        </button>
      </TabBar>
      <List
        entries={entries}
        onToggleFavourite={onToggleFavourite}
        likedEntries={likedEntries}
        likeTab={likeTab}
      />
    </section>
  );
}
