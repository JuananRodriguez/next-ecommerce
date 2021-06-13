import styled from "styled-components";

export const ProductCartPreCheckoutStyle = styled.div`
  z-index: 999;
  position: fixed;
  bottom: 0;
  background-color: white;
  width: 100%;
  padding: 1rem;
  border-top: 3px solid #e0e0e0;

  & .price-block {
    font-size: 1.125rem;
    line-height: 1.25rem;
    display: flex;
    justify-content: space-between;
  }

  & .price-title {
    font-weight: bold;
  }

  & .checkout-button{
    width: 100%;
    margin-top: 1rem;
  }
`;
