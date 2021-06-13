import styled from "styled-components";

type VariantStyleProps = {
  isSelected?: boolean;
};

export const VariantStyle = styled.div`
  padding: 0.25rem;
  width: 50px;
  height: 50px;

  &:hover {
    cursor: pointer;
  }

  ${(p: VariantStyleProps) =>
    p.isSelected &&
    `
    border: 2px solid black;
    border-radius: 5px;
  `}
`;
