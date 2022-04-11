import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  margin: auto;
  width: 100%;
  height: 20rem;
  background: var(--header-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
  gap: 1.5rem;

  strong {
    letter-spacing: 0.1rem;
    text-align: center;
    font-size: 3rem;
    color: var(--text-color);
    width: 100%;
  }
`;

export const NewNoteBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  input,
  button {
    font-size: 1.2rem;
    border: 0;
    height: 3rem;
  }

  button {
    min-width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 30rem;
    border-radius: 0.25rem;
    padding: 0.25rem 1rem;
    margin: 0 1rem;
  }

  button {
    border-radius: 5rem;
    background: var(--purple);
    color: #fff;
    transition: 0.2s;
    margin-right: 1rem;

    &:hover {
      background: ${darken(0.1, "#5b5f97")};
    }
  }
`;
