import { Header } from "./components/Header";
import { NotesList } from "./components/NotesList";
import { NotesProvider } from "./hooks/NotesContext";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <NotesProvider>
      <div className="App">
        <Header />
        <NotesList />
        <GlobalStyle />
      </div>
    </NotesProvider>
  );
}
