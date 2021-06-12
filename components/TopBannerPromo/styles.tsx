import styled from "styled-components";

interface TopBannerStyleProps {
  top?: boolean;
  bottom?: boolean;
}

export const TopBannerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  background-color: palevioletred;
  padding: 0.25rem 0.5rem;
  width: 100%;
  border-bottom: 3px solid #e0e0e0;
  z-index: 100;
  height: 50px;
  left: 0;

  ${(p: TopBannerStyleProps) =>
    p.top &&
    `
    border-bottom: 3px solid #e0e0e0;
    top: 0;
    `}
  ${(p: TopBannerStyleProps) =>
    p.bottom &&
    `
    border-top: 3px solid #e0e0e0;
    bottom: 0;
  `}

`;
