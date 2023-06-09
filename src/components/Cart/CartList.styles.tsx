import { css, styled } from "styled-components";
import { theme } from "theme";

const commonStyles = css`
  background-color: ${theme.colors.white};
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.15);
  border-radius: 0.75rem;
  height: 72vh;
  width: 100%;
`;

const ListContainer = styled.div`
  ${commonStyles};

  padding: 1rem;
  overflow: auto;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TextContainer = styled.div`
  ${commonStyles};

  display: grid;
  place-items: center;
`;

const ContentText = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
`;

export { ListContainer, TextContainer, ContentText };
