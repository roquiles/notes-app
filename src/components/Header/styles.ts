import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  margin: auto;
  width: 100%;
  height: 20rem;
  background: var(--header-bg);
  padding: 0 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    letter-spacing: 0.1rem;
    font-size: 4rem;
    color: var(--text-color);
  }
`;

export const NewNoteBox = styled.header`
  width: 60%;
  display: flex;
  justify-content: flex-end;

  input,
  button {
    font-size: 1.2rem;
    padding: 0.25rem 1rem;
    border: 0;
    height: 3rem;
  }

  input {
    width: 30rem;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
  }

  button {
    border-radius: 5rem;
    background: var(--purple);
    color: #fff;

    transition: 0.2s;

    &:hover {
      background: ${darken(0.1, "#5b5f97")};
    }
  }
`;
