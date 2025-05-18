import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Navigation from './components/Navigation';
import ScopusPage from './components/ScopusPage';
import WebOfSciencePage from './components/WebOfSciencePage';
import PubMedPage from './components/PubMedPage';
import DOAJPage from './components/DOAJPage';
import EmbasePage from './components/EmbasePage';
import JournalsPage from './components/JournalsPage';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #9c27b0, #673ab7);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 15s ease infinite;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const HeadlineSection = styled.div`
  padding: 3rem 2rem;
  text-align: center;
  color: white;
`;

const MainTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
  opacity: 0.9;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
  opacity: 0.8;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <HeadlineSection>
          <MainTitle>Research Database Templates</MainTitle>
          <Subtitle>
            Access comprehensive templates for major research databases including Scopus,
            Web of Science, PubMed, DOAJ, and Embase.
          </Subtitle>
        </HeadlineSection>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/scopus" replace />} />
          <Route path="/scopus" element={<ScopusPage />} />
          <Route path="/web-of-science" element={<WebOfSciencePage />} />
          <Route path="/pubmed" element={<PubMedPage />} />
          <Route path="/doaj" element={<DOAJPage />} />
          <Route path="/embase" element={<EmbasePage />} />
          <Route path="/journals" element={<JournalsPage />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;