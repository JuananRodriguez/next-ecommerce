import styled from "styled-components";

export const ProductCartItemStyle = styled.div`
  margin: 1rem;
  padding: 0 0 1rem 0;
  display: flex;
  flex-direction: row;

  &:not(:last-child) {
    border-bottom: 1px solid rgb(224, 224, 224);;
  }

  & img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  & .info {
    flex: 1;
    padding-left: 10px;
    padding-right: 10px;
  }

  & .name,
  & .price {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  & .name {
    font-weight: 600;
  }
`;
