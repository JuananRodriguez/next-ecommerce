import styled from "styled-components";

export const ProductViewStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1600px;
  margin: auto;

  & .content {
    flex: 1 1 350px;
    padding: 1rem;

    & .name,
    & .price {
      font-size: 1.4rem;
      margin-top: 5px;
      margin-bottom: 5px;
    }

    & .name {
      color: #707070;
      font-weight: bold;
    }

    & .counter {
      margin-top: 0.5rem;
      margin-left: 3px;
    }
  }

  & .images {
    padding: 1rem;
    flex: 1 1 350px;
  }

`;
