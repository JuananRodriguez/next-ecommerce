import styled from "styled-components";

export const ButtonStyle = styled.button`
  padding: 0.5rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 1.2rem;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;

  @media (min-width: 480px) {
    font-size: 1.6rem;
    margin-left: 0px;
    margin-right: 0px;
  }
`;
