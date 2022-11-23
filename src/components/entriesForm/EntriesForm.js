import "./Form.css";
import Button from "../button/Button";

export default function EntriesForm({ onCreateEntry, actualDate }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      motto: event.target.elements.motto.value,
      notes: event.target.elements.notes.value,
    };
    onCreateEntry(data);
    event.target.reset();
    event.target.elements.motto.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="form">
        <legend style={{ fontWeight: "bold" }}>{actualDate}</legend>
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
