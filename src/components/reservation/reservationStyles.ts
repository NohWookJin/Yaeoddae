// library
import styled from "styled-components";

export const SectionContainer = styled.section<{ $needMarginTop?: boolean }>`
  margin-top: ${(props) => (props.$needMarginTop ? "44px" : "0")};
  padding: 20px 16px 30px;
  line-height: 1.5;
  font-weight: 500;
  color: ${(props) => props.theme.Color.mainFontColor};
`;

export const SectionLabel = styled.div`
  display: flex;
  gap: 4px;
  font-weight: 600;

  span {
    color: ${(props) => props.theme.Color.mainColor};
  }
`;

export const SectionDivider = styled.div`
  height: 8px;
  background-color: ${(props) => props.theme.Color.borderColor};
`;
