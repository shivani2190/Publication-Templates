import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  padding: 1.5rem 0;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  backdrop-filter: blur(5px);
`;

const NavButton = styled(Link)`
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

    &:before {
      left: 100%;
    }
  }
`;

const Navigation = () => {
  return (
    <NavContainer>
      <NavButton to="/scopus">Scopus</NavButton>
      <NavButton to="/web-of-science">Web of Science</NavButton>
      <NavButton to="/pubmed">PubMed</NavButton>
      <NavButton to="/doaj">DOAJ</NavButton>
      <NavButton to="/embase">Embase</NavButton>
      <NavButton to="/journals">Journals</NavButton>
    </NavContainer>
  );
};

export default Navigation;