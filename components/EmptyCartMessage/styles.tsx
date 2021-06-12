import styled from "styled-components";

export const EmptyCartMessageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  & .emoji {
    font-size: 3.6rem;
    margin: 2rem 0 1rem 0;
  }
`;
