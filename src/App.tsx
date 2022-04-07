import { useState } from "react";
import { Header } from "./components/Header";
import { NotesList } from "./components/NotesList";
import { GlobalStyle } from "./styles/global";

interface Note {
  id: number;
  content: string;
  createdAt: Date;
}

export function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  function handlerAddNewNote(note: Note) {
    setNotes([...notes, note]);
  }

  return (
    <div className="App">
      <Header onCreateNewNote={handlerAddNewNote} />
      <NotesList notes={notes} />
      <GlobalStyle />
    </div>
  );
}
