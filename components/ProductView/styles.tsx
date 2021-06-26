import styled from "styled-components";

export const ProductViewStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;

  & .name {
    flex: 1 1 100%;
    color: #707070;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    padding: 0 1rem;

    @media (min-width: 480px) {
      font-size: 2.2rem;
      margin-top: 3rem;
      margin-bottom: 2rem;
    }
  }

  & .price {
    font-size: 1.4rem;
    margin-top: 1.8rem;
    margin-bottom: 2rem;

    @media (min-width: 480px) {
      font-size: 2.2rem;
    }
  }

  & .content {
    flex: 1 1 350px;
    padding: 1rem;

    & .counter {
      margin-top: 2rem;
      margin-left: 3px;
    }
  }

  & .specifications {
    flex: 1 1 100%;
  }

  & .images {
    padding: 0 1rem;
    flex: 1 1 350px;
  }

  & .description {
    padding: 0 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.85rem;
  }

  & .short-description{
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.85rem;
  }

  & .add-to-cart{
    margin-top: 4rem;
  }
`;
