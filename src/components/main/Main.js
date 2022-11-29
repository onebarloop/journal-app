import EntriesForm from "../entriesForm/EntriesForm";
import EntriesSection from "../entriesSection/EntriesSection";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";

import date from "date-and-time";
import { nanoid } from "nanoid";

const now = new Date();
const actualDate = date.format(now, "MMM DD YYYY");

export default function Main() {
  const [entries, setEntries] = useLocalStorageState("localEntry", {
    defaultValue: [
      {
        motto: "Ein erster Eintrag",
        notes:
          "Heute war ein schöner Tag. Ich bin mit Delfinen geschwommen, habe die Alpen bestiegen und abends gabs Pizza!",
        date: "Mai 05 1993",
        id: 1298127987,
        isFavourite: false,
      },
    ],
  });

  const likedEntries = entries.filter((entry) => entry.isFavourite);
  console.log(likedEntries);

  function handleCreateEntry(data) {
    const newEntry = data;
    setEntries([
      { isFavourite: false, id: nanoid(), date: actualDate, ...newEntry },
      ...entries,
    ]);
  }

  function handleToggleFavourite(id) {
    setEntries(
      entries.map((entry) => {
        if (entry.id === id)
          return { ...entry, isFavourite: !entry.isFavourite };
        return entry;
      })
    );
  }

  return (
    <StyledMain>
      <EntriesForm onCreateEntry={handleCreateEntry} actualDate={actualDate} />
      <EntriesSection
        likedEntries={likedEntries}
        entries={entries}
        onToggleFavourite={handleToggleFavourite}
      />
    </StyledMain>
  );
}

const StyledMain = styled.section`
  display: flex;
  flex-direction: column;
`;
