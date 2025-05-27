import React, { useState } from 'react';

function Publications() {
  const [activeDatabase, setActiveDatabase] = useState('scopus');
  const [quartile, setQuartile] = useState('');
  const [subjectArea, setSubjectArea] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const databases = ['Scopus', 'PubMed', 'Embase', 'DOAJ', 'Web Of Science', 'ABDC'];

  const quartiles = ['Q1', 'Q2', 'Q3', 'Q4'];
  const subjectAreas = ['Medicine', 'Engineering', 'Computer Science', 'Social Sciences', 'Arts & Humanities'];
  const priceRanges = ['$0-500', '$501-1000', '$1001-2000', '$2000+'];

  const journals = [
    {
      id: 1,
      name: 'Journal of Applied Bioanalysis',
      quartile: 'Q1',
      subjectArea: 'Medicine',
      price: 800,
      scopusLink: 'https://www.scopus.com/sourceid/123',
      journalLink: 'https://journal-applied-bioanalysis.com',
      acceptanceTime: '3-4 months',
      publicationTime: '2-3 months',
      database: 'scopus'
    },
    {
      id: 2,
      name: 'International Journal of Environmental Sciences',
      quartile: 'Q2',
      subjectArea: 'Engineering',
      price: 1200,
      scopusLink: 'https://www.scopus.com/sourceid/456',
      journalLink: 'https://environmental-sciences.org',
      acceptanceTime: '4-5 months',
      publicationTime: '3-4 months',
      database: 'scopus'
    },
    // Add more journal entries as needed
  ];

  const filteredJournals = journals.filter(journal => {
    if (journal.database !== activeDatabase) return false;
    if (quartile && journal.quartile !== quartile) return false;
    if (subjectArea && journal.subjectArea !== subjectArea) return false;
    if (priceRange) {
      const [min, max] = priceRange.replace('$', '').split('-').map(num => num === '+' ? Infinity : Number(num));
      if (journal.price < min || journal.price > max) return false;
    }
    return true;
  });

  const copyTemplate = (journal) => {
    const template = `Journal Name: ${journal.name}
Scopus Link: ${journal.scopusLink}
Journal Link: ${journal.journalLink}
Acceptance Time: ${journal.acceptanceTime}
Publication Time: ${journal.publicationTime}`;
    navigator.clipboard.writeText(template);
  };

  return (
    <div className="publications">
      <div className="database-tabs">
        {databases.map(db => (
          <button
            key={db.toLowerCase()}
            className={`database-tab ${activeDatabase === db.toLowerCase() ? 'active' : ''}`}
            onClick={() => setActiveDatabase(db.toLowerCase())}
          >
            {db}
          </button>
        ))}
      </div>

      {activeDatabase === 'scopus' && (
        <div className="filters-section">
          <h3 className="filters-title">Filter Journals</h3>
          <div className="search-filters">
            <div className="filter-card">
              <label>Quartile Ranking</label>
              <select value={quartile} onChange={(e) => setQuartile(e.target.value)}>
                <option value="">All Quartiles</option>
                {quartiles.map(q => (
                  <option key={q} value={q}>{q}</option>
                ))}
              </select>
            </div>

            <div className="filter-card">
              <label>Subject Area</label>
              <select value={subjectArea} onChange={(e) => setSubjectArea(e.target.value)}>
                <option value="">All Subjects</option>
                {subjectAreas.map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>

            <div className="filter-card">
              <label>Price Range</label>
              <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                <option value="">All Prices</option>
                {priceRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
          </div>
          {(quartile || subjectArea || priceRange) && (
            <button 
              className="clear-filters"
              onClick={() => {
                setQuartile('');
                setSubjectArea('');
                setPriceRange('');
              }}
            >
              Clear Filters
            </button>
          )}
        </div>
      )}

      <div className="journals-grid">
        {filteredJournals.map(journal => (
          <div key={journal.id} className="journal-card">
            <button className="copy-button" onClick={() => copyTemplate(journal)}>
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
              </svg>
            </button>
            <h3>{journal.name}</h3>
            <div className="journal-details">
              <p><strong>Quartile:</strong> {journal.quartile}</p>
              <p><strong>Subject Area:</strong> {journal.subjectArea}</p>
              <p><strong>Price:</strong> ${journal.price}</p>
              <p><strong>Acceptance Time:</strong> {journal.acceptanceTime}</p>
              <p><strong>Publication Time:</strong> {journal.publicationTime}</p>
              <div className="journal-links">
                <a href={journal.scopusLink} target="_blank" rel="noopener noreferrer">Scopus Link</a>
                <a href={journal.journalLink} target="_blank" rel="noopener noreferrer">Journal Link</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Publications;
