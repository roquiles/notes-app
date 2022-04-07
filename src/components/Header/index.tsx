import { useState } from "react";
import { Container, NewNoteBox } from "./styles";

interface Note {
  id: number;
  content: string;
  createdAt: Date;
}

interface HeaderProps {
  onCreateNewNote: (note: Note) => void;
}

export function Header(props: HeaderProps) {
  const [newNoteContent, setNewNoteContent] = useState("");

  function handleCreateNewNote(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    props.onCreateNewNote({
      id: Math.random(),
      createdAt: new Date(),
      content: newNoteContent,
    });
  }

  return (
    <Container>
      <strong>make a note.</strong>
      <NewNoteBox>
        <input
          type="text"
          name="note"
          id="note"
          placeholder="Write your note"
          onChange={(e) => setNewNoteContent(e.target.value)}
        />
        <button onClick={handleCreateNewNote} type="submit">
          Add note
        </button>
      </NewNoteBox>
    </Container>
  );
}
