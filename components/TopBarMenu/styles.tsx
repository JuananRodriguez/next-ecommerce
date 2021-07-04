import styled from "styled-components";

export const TopBarStyle = styled("div")`
  position: fixed;
  left: 0;
  background-color: white;
  padding: 0.25rem 0.5rem;
  width: 100%;
  z-index: 100;
  height: 60px;
  border-bottom: 3px solid #e0e0e0;
  top: 0;

  & .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1600px;
    width: 100%;
    margin: auto;

    & .checkout {
      display: flex;
      align-items: center;
    }

    & .icon-and-count {
      display: flex;
      align-items: center;
      flex-direction: column;

      &:not(:last-child) {
        margin-right: 0.5rem;
      }
    }
  }
`;
