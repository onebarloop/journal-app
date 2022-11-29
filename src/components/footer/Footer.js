import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <h2>Der Footer</h2>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: var(--color-granite);
  color: var(--color-foam);
  padding: 0.8rem;
  text-align: center;
`;
