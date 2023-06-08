import { styled } from "styled-components";

const ContentWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem;
  margin-left: 216px;
`;

const SidebarWrapper = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem 0;
`;

const SortAndFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { SidebarWrapper, SortAndFilter, ContentWrapper };
