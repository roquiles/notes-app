import { Header } from "./components/Header";
import { NotesList } from "./components/NotesList";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <Header />
      <NotesList />
      <GlobalStyle />
    </div>
  );
}
