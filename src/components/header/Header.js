import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <h1>Meine kleine App</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: var(--color-water-10);
  padding: 1rem;
  border-bottom: 2px solid var(--color-nemo);
`;
