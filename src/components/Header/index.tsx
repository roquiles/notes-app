import { useState } from "react";
import { useNotes } from "../../hooks/NotesContext";
import { Container, NewNoteBox } from "./styles";
import { FaPlus } from "react-icons/fa";

export function Header() {
  const [newNoteContent, setNewNoteContent] = useState("");
  const { handlerAddNewNote } = useNotes();

  function handleCreateNewNote(e: React.MouseEvent<HTMLElement>) {
    if (newNoteContent === "") return;

    handlerAddNewNote({
      id: Math.random(),
      createdAt: new Date(),
      content: newNoteContent,
    });

    setNewNoteContent("");
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
          value={newNoteContent}
        />
        <button onClick={handleCreateNewNote} type="submit">
          <FaPlus />
        </button>
      </NewNoteBox>
    </Container>
  );
}
