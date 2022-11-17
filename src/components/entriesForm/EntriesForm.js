import "./Form.css";
import Button from "../button/Button";

export default function EntriesForm() {
  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label htmlFor="motto">Motto</label>
      <input id="motto"></input>
      <label htmlFor="notes">Notes</label>
      <textarea id="notes"></textarea>
      <Button name="SUBMIT" />
    </form>
  );
}
