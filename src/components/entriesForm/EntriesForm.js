import "./Form.css";
import Button from "../button/Button";
import date from "date-and-time";

const now = new Date();

export default function EntriesForm({ onCreateEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    onCreateEntry(
      event.target.elements.motto.value,
      event.target.elements.notes.value
    );
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
