import styled from "styled-components";

export const TopBarStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  padding: 0.25rem 0.5rem;
  width: 100%;
  border-top: 3px solid #e0e0e0;
  z-index: 999;
  height: 60px;

  & .logotype {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .checkout {
    display: flex;
    align-items: center;
  }

  & .icon-and-count {
    display: flex;
    align-items: center;
    flex-direction: column;

    &:not(:last-child){
      margin-right: 0.5rem;
    }
  }

  & .icon-and-count {
  }
`;
