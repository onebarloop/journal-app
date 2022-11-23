import "./Main.css";
import EntriesForm from "../entriesForm/EntriesForm";
import EntriesSection from "../entriesSection/EntriesSection";
import useLocalStorageState from "use-local-storage-state";

import date from "date-and-time";

const now = new Date();
const actualDate = date.format(now, "MMM DD YYYY");

export default function Main() {
  const [entries, setEntries] = useLocalStorageState("localEntry", {
    defaultValue: [
      {
        motto: "Ein erster Eintrag",
        notes:
          "Heute war ein schöner Tag. Ich bin mit Delfinen geschwommen, habe die Alpen bestiegen und abends gabs Pizza!",
        date: "14.05.1993",
      },
    ],
  });
  console.log(entries);

  function handleCreateEntry(data) {
    const newEntry = {
      motto: data.motto,
      notes: data.notes,
      date: actualDate,
    };
    setEntries([...entries, newEntry]);
  }

  return (
    <section className="main">
      <EntriesForm onCreateEntry={handleCreateEntry} actualDate={actualDate} />
      <EntriesSection entries={entries} />
    </section>
  );
}
