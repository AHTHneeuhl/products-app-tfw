import styled from "styled-components";

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
  grid-gap: 0.5rem;
  padding: 0.25rem;
  padding-left: 0.75rem;

  height: 88vh;
  min-width: 1024px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const TextContainer = styled.div`
  display: grid;
  place-items: center;
`;

const ContentText = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
`;

export { ProductList, TextContainer, ContentText };
