import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

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
}

export const NotesContext = createContext<NotesContextData>(
  {} as NotesContextData
);

export function NotesProvider({ children }: NotesProviderProps) {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const notesArray = localStorage.getItem("notesList");
    if (notesArray !== null) {
      setNotes(JSON.parse(notesArray));
    }
  }, []);

  function handlerAddNewNote(note: Note) {
    const newNotesArray = [...notes, note];
    setNotes(newNotesArray);

    localStorage.setItem("notesList", JSON.stringify(newNotesArray));
  }

  function handlerDeleteNote(id: number) {
    const notesList = notes.filter((note) => note.id !== id);
    setNotes(notesList);

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
