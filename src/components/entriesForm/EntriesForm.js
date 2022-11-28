import Button from "../button/Button";
import styled from "styled-components";

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
      <StyledForm>
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
        <StyledButton name="SUBMIT" />
      </StyledForm>
    </form>
  );
}

const StyledButton = styled(Button)`
  background-color: var(--color-nemo);
  color: black;
  width: 8rem;
  align-self: center;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  padding: 0.3rem;
  cursor: pointer;
`;

const StyledForm = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 2.3rem 0;
  gap: 1rem;
  border: var(--color-water-10) 0.5px solid;
  border-radius: 0.5rem;
  padding-top: 1rem;
`;
