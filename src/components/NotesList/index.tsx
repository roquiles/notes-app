import { Container, NoteItem, StyledEdiText } from "./styles";
import {
  FaPencilAlt,
  FaTrashAlt,
  FaTimes,
  FaCheck,
  FaCalendarAlt,
} from "react-icons/fa";
import { useNotes } from "../../hooks/NotesContext";

interface Note {
  id: number;
  content: string;
  createdAt: Date;
}

export function NotesList() {
  const { notes, handlerDeleteNote, handlerUpdateNotes, isEmpty } = useNotes();

  function handlerEditNote(value: any, note: Note) {
    const currUpdatedNote = {
      id: note.id,
      content: value,
      createdAt: new Date(),
    };

    handlerUpdateNotes(currUpdatedNote);
  }

  return (
    <Container hidden={isEmpty}>
      <ul>
        {notes.map((note) => {
          return (
            <NoteItem key={note.id}>
              <div>
                <StyledEdiText
                  value={note.content}
                  onSave={(value) => handlerEditNote(value, note)}
                  editButtonClassName="edit"
                  editButtonContent={<FaPencilAlt />}
                  cancelButtonContent={<FaTimes />}
                  cancelButtonClassName="cancel"
                  saveButtonContent={<FaCheck />}
                  saveButtonClassName="save"
                  viewContainerClassName="view-container"
                ></StyledEdiText>
                <div>
                  <button
                    type="button"
                    className="delete"
                    onClick={() => handlerDeleteNote(note.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
              <p>
                <FaCalendarAlt />{" "}
                {`Created at: ${new Date(note.createdAt).getDate()}/${
                  new Date(note.createdAt).getMonth() + 1
                }/${new Date(note.createdAt).getFullYear()}`}
              </p>
            </NoteItem>
          );
        })}
      </ul>
    </Container>
  );
}
