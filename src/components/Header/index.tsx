import { Container, NewNoteBox } from "./styles";

export function Header() {
  return (
    <Container>
      <strong>take a note.</strong>
      <NewNoteBox>
        <input
          type="text"
          name="note"
          id="note"
          placeholder="Write your note"
        />
        <button type="submit">Add note</button>
      </NewNoteBox>
    </Container>
  );
}
