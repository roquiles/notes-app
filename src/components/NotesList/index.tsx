import { Container, NoteItem } from "./styles";
import trashImg from "../../assets/trash.svg";
import pencilImg from "../../assets/pencil.svg";

export function NotesList() {
  return (
    <Container>
      <ul>
        <NoteItem>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe ex
            ut aperiam inventore quibusdam eos doloremque aliquid, repellat
            corporis et modi ullam molestias debitis laboriosam impedit expedita
            vel ab quia.
          </p>
          <div>
            <button type="button" className="edit">
              <img src={pencilImg} alt="edit" />
            </button>
            <button type="button" className="delete">
              <img src={trashImg} alt="delete" />
            </button>
          </div>
        </NoteItem>
      </ul>
    </Container>
  );
}
