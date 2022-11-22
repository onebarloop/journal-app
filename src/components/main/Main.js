import "./Main.css";
import EntriesForm from "../entriesForm/EntriesForm";
import EntriesSection from "../entriesSection/EntriesSection";
import useLocalStorageState from "use-local-storage-state";

export default function Main() {
  const [entries, setEntries] = useLocalStorageState("localEntry", {
    defaultValue: [],
  });
  console.log(entries);

  function handleCreateEntry(mottoPara, notesPara) {
    const newEntry = {
      motto: mottoPara,
      notes: notesPara,
    };
    setEntries([...entries, newEntry]);
  }

  return (
    <section className="main">
      <EntriesForm onCreateEntry={handleCreateEntry} />
      <EntriesSection />
    </section>
  );
}
