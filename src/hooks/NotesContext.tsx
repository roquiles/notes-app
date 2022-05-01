import { createContext, ReactNode, useContext, useState } from "react";

interface Note {
  id: number;
  content: string;
  createdAt: Date;
}

interface NotesProviderProps {
  children: ReactNode;
}

interface NotesContextData {
  notes: Note[];
  handlerAddNewNote: (note: Note) => void;
  handlerDeleteNote: (id: number) => void;
  handlerUpdateNotes: (updatedNote: Note) => void;
  isEmpty: boolean;
}

export const NotesContext = createContext<NotesContextData>(
  {} as NotesContextData
);

export function NotesProvider({ children }: NotesProviderProps) {
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesArray = localStorage.getItem("notesList");
    if (notesArray) {
      return JSON.parse(notesArray);
    }

    return [];
  });
  const [isEmpty, setIsEmpty] = useState(() => {
    if (notes) {
      return false;
    } else {
      return true;
    }
  });

  function handlerAddNewNote(note: Note) {
    const newNotesArray = [...notes, note];
    setNotes(newNotesArray);
    setIsEmpty(false);

    localStorage.setItem("notesList", JSON.stringify(newNotesArray));
  }

  function handlerDeleteNote(id: number) {
    const notesList = notes.filter((note) => note.id !== id);
    setNotes(notesList);

    console.log(notesList);

    if (notesList.length === 0) {
      setIsEmpty(true);
    }

    localStorage.setItem("notesList", JSON.stringify(notesList));
  }

  function handlerUpdateNotes(updatedNote: Note) {
    const updatedNotes = notes.map((noteItem) => {
      if (noteItem.id === updatedNote.id) {
        noteItem.content = updatedNote.content;
      }

      return noteItem;
    });

    setNotes(updatedNotes);

    localStorage.setItem("notesList", JSON.stringify(updatedNotes));
  }

  return (
    <NotesContext.Provider
      value={{
        notes,
        handlerAddNewNote,
        handlerDeleteNote,
        handlerUpdateNotes,
        isEmpty,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);

  return context;
}
