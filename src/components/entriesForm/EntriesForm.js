import "./Form.css";
import Button from "../button/Button";
import date from "date-and-time";
import useLocalStorageState from "use-local-storage-state";

const now = new Date();

export default function EntriesForm() {
  const [entries, setEntries] = useLocalStorageState("localEntry", {
    defaultValue: [],
  });
  console.log(entries);

  function handleSubmit(event) {
    event.preventDefault();
    const newEntry = {
      motto: event.target.elements.motto.value,
      notes: event.target.elements.notes.value,
    };
    setEntries([...entries, newEntry]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="form">
        <legend style={{ fontWeight: "bold" }}>
          {date.format(now, "ddd, MMM DD YYYY")}
        </legend>
        <label htmlFor="motto">Motto</label>
        <input id="motto" name="motto"></input>
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          placeholder="Liebes Tagebuch..."
          rows={8}
          name="notes"
        ></textarea>
        <Button name="SUBMIT" />
      </fieldset>
    </form>
  );
}
