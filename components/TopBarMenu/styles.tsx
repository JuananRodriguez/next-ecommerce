import styled from "styled-components";

interface TopBarStyleProps {
  top?: boolean;
  bottom?: boolean;
}

export const TopBarStyle = styled("div")`
  position: fixed;
  left: 0;
  background-color: white;
  padding: 0.25rem 0.5rem;
  width: 100%;
  z-index: 100;
  height: 60px;

  ${(p: TopBarStyleProps) =>
    p.top &&
    `
    border-bottom: 3px solid #e0e0e0;
    top: 0;
    `}
  ${(p: TopBarStyleProps) =>
    p.bottom &&
    `
    border-top: 3px solid #e0e0e0;
    bottom: 0;
  `}

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

export const LogotypeAnchor = styled.a`
  display: block;
`;
