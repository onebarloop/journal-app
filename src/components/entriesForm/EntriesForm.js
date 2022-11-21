import "./Form.css";
import Button from "../button/Button";
import date from "date-and-time";

const now = new Date();

export default function EntriesForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <fieldset className="form">
        <legend style={{ fontWeight: "bold" }}>
          {date.format(now, "ddd, MMM DD YYYY")}
        </legend>
        <label htmlFor="motto">Motto</label>
        <input id="motto"></input>
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          placeholder="Liebes Tagebuch..."
          rows={8}
        ></textarea>
        <Button name="SUBMIT" />
      </fieldset>
    </form>
  );
}
