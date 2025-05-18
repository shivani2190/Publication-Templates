import React from 'react';
import styled from 'styled-components';

const JournalsContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: white;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: white;
`;

const JournalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const JournalSection = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
`;

const JournalList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const JournalItem = styled.li`
  padding: 0.8rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
  
  a {
    color: white;
    text-decoration: none;
    transition: opacity 0.2s;
    
    &:hover {
      opacity: 0.8;
    }
  }
`;

function JournalsPage() {
  const indianJournals = [
    { name: "Indian Journal of Science and Technology", url: "https://indjst.org/" },
    { name: "Journal of Scientific and Industrial Research", url: "http://nopr.csircentral.net/handle/123456789/1" },
    { name: "Current Science", url: "https://www.currentscience.ac.in/" },
    { name: "Indian Journal of Medical Research", url: "https://www.ijmr.org.in/" },
    { name: "Indian Journal of Traditional Knowledge", url: "http://nopr.csircentral.net/handle/123456789/3" }
  ];

  const foreignJournals = [
    { name: "Nature", url: "https://www.nature.com/" },
    { name: "Science", url: "https://www.science.org/" },
    { name: "The Lancet", url: "https://www.thelancet.com/" },
    { name: "Cell", url: "https://www.cell.com/" },
    { name: "PLOS ONE", url: "https://journals.plos.org/plosone/" }
  ];

  return (
    <JournalsContainer>
      <SectionTitle>Research Journals Directory</SectionTitle>
      <JournalGrid>
        <JournalSection>
          <h3>Indian Journals</h3>
          <JournalList>
            {indianJournals.map((journal, index) => (
              <JournalItem key={index}>
                <a href={journal.url} target="_blank" rel="noopener noreferrer">
                  {journal.name}
                </a>
              </JournalItem>
            ))}
          </JournalList>
        </JournalSection>
        
        <JournalSection>
          <h3>Foreign Journals</h3>
          <JournalList>
            {foreignJournals.map((journal, index) => (
              <JournalItem key={index}>
                <a href={journal.url} target="_blank" rel="noopener noreferrer">
                  {journal.name}
                </a>
              </JournalItem>
            ))}
          </JournalList>
        </JournalSection>
      </JournalGrid>
    </JournalsContainer>
  );
}

export default JournalsPage;
