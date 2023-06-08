import styled from "styled-components";

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
  grid-gap: 0.5rem;
  padding: 0.25rem;
  padding-left: 0.75rem;

  height: 88vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

export { ProductList };
