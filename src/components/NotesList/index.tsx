import { Container, NoteItem } from "./styles";
import trashImg from "../../assets/trash.svg";
import pencilImg from "../../assets/pencil.svg";

interface Note {
  id: number;
  content: string;
  createdAt: Date;
}

interface NotesListProps {
  notes: Note[];
}

export function NotesList({ notes }: NotesListProps) {
  return (
    <Container>
      <ul>
        {notes.map((note) => {
          return (
            <NoteItem key={note.id}>
              <p>{note.content}</p>
              <div>
                <button type="button" className="edit">
                  <img src={pencilImg} alt="edit" />
                </button>
                <button type="button" className="delete">
                  <img src={trashImg} alt="delete" />
                </button>
              </div>
            </NoteItem>
          );
        })}
      </ul>
    </Container>
  );
}
