import EdiText from "react-editext";
import styled from "styled-components";

export const Container = styled.section`
  min-height: 0px;

  margin: -5rem auto;
  padding: 3rem;
  width: 100%;
  background: var(--list-bg);
  max-width: 800px;
  border-radius: 1rem;

  ul {
    list-style: none;
  }
`;

export const NoteItem = styled.li`
  background: #fff;
  border-radius: 0.25rem;
  min-height: 5rem;
  padding: 1rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    align-items: center;
  }

  & + li {
    margin-top: 1rem;
  }

  p {
    color: var(--date-color);
    font-style: italic;
    font-size: 0.7rem;
    margin-top: 0.5rem;
    align-self: flex-end;
  }

  button {
    border: 0;
    padding: 0.5rem;
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;

    transition: filter 0.2s;
  }

  button:hover {
    filter: brightness(0.8);
  }

  button.delete {
    background: var(--red);
    color: #fff;
  }
`;

export const StyledEdiText = styled(EdiText)`
  width: 100%;

  button {
    margin-right: 0.25rem;
  }

  .edit {
    color: var(--purple);
    background-color: #fff;
  }

  .cancel {
    color: var(--red);
  }

  .save {
    color: var(--green);
  }

  .styles-module_Editext__cancel_button__26sqr::before {
    content: "";
    margin: 0;
  }

  .view-container {
    display: flex;
    align-items: center;
    width: 100%;
  }
`;
