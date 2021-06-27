import styled from "styled-components";

export const ButtonStyle = styled.button`
  padding: 0.5rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 1.2rem;
  cursor: pointer;

  @media (min-width: 480px) {
    font-size: 1.6rem;
  }

  &:hover {
    background-color: black;
    color: white;
  }

  &:active {
    background-color: grey;
  }
`;
