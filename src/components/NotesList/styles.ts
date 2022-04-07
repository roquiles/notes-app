import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.section`
  height: 500px;

  margin: -5rem auto;
  padding: 3rem;
  width: 100%;
  background: var(--list-bg);
  max-width: 1280px;
  border-radius: 1rem;

  ul {
    list-style: none;
  }
`;

export const NoteItem = styled.li`
  background: #fff;
  border-radius: 0.25rem;
  min-height: 5rem;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  justify-content: space-between;

  & + li {
    margin-top: 1rem;
  }

  div {
    display: flex;
    flex-direction: row;
    margin-left: 0.7rem;
  }

  button {
    border: 0;
    padding: 0.5rem;
    border-radius: 50%;

    transition: filter 0.2s;
  }

  button:hover {
    filter: brightness(0.8);
  }

  button.delete {
    background: var(--red);
  }

  button.edit {
    background: var(--light-purple);
    margin-right: 0.5rem;
  }
`;
