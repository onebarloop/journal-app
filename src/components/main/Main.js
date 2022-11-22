import "./Main.css";
import EntriesForm from "../entriesForm/EntriesForm";
import EntriesSection from "../entriesSection/EntriesSection";
import useLocalStorageState from "use-local-storage-state";

import date from "date-and-time";

const now = new Date();
const actualDate = date.format(now, "MMM DD YYYY");

export default function Main() {
  const [entries, setEntries] = useLocalStorageState("localEntry", {
    defaultValue: [],
  });
  console.log(entries);

  function handleCreateEntry(mottoPara, notesPara) {
    const newEntry = {
      motto: mottoPara,
      notes: notesPara,
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
