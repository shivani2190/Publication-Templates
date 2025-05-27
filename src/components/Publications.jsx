import React, { useState, useCallback } from 'react';

function Publications() {
  const [activeDatabase, setActiveDatabase] = useState('scopus');
  const [quartile, setQuartile] = useState('');
  const [subjectArea, setSubjectArea] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const databases = ['Scopus', 'PubMed', 'Embase', 'DOAJ', 'Web Of Science', 'ABDC'];

  const quartiles = ['Q1', 'Q2', 'Q3', 'Q4'];
  const subjectAreas = ['Medicine', 'Engineering', 'Computer Science', 'Social Sciences', 'Arts & Humanities'];
  const priceRanges = ['₹0-25,000', '₹25,001-50,000', '₹50,001-75,000', '₹75,000+'];

  const journals = [
    {
      id: 1,
      name: 'Journal of Applied Bioanalysis',
      quartile: 'Q1',
      subjectArea: 'Medicine',
      price: 45000,
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
      price: 68000,
      scopusLink: 'https://www.scopus.com/sourceid/456',
      journalLink: 'https://environmental-sciences.org',
      acceptanceTime: '4-5 months',
      publicationTime: '3-4 months',
      database: 'scopus'
    },
    {
      id: 3,
      name: 'Computer Science Review',
      quartile: 'Q1',
      subjectArea: 'Computer Science',
      price: 82000,
      scopusLink: 'https://www.scopus.com/sourceid/789',
      journalLink: 'https://cs-review.org',
      acceptanceTime: '2-3 months',
      publicationTime: '2-3 months',
      database: 'scopus'
    },
    {
      id: 4,
      name: 'Social Sciences Quarterly',
      quartile: 'Q3',
      subjectArea: 'Social Sciences',
      price: 22000,
      scopusLink: 'https://www.scopus.com/sourceid/101',
      journalLink: 'https://ssq-journal.com',
      acceptanceTime: '3-4 months',
      publicationTime: '2-3 months',
      database: 'scopus'
    },
    {
      id: 5,
      name: 'Arts and Humanities Review',
      quartile: 'Q4',
      subjectArea: 'Arts & Humanities',
      price: 18000,
      scopusLink: 'https://www.scopus.com/sourceid/202',
      journalLink: 'https://arts-humanities-review.com',
      acceptanceTime: '2-3 months',
      publicationTime: '1-2 months',
      database: 'scopus'
    },
    {
      id: 6,
      name: 'Advanced Engineering Forum',
      quartile: 'Q2',
      subjectArea: 'Engineering',
      price: 95000,
      scopusLink: 'https://www.scopus.com/sourceid/303',
      journalLink: 'https://advanced-engineering.org',
      acceptanceTime: '3-4 months',
      publicationTime: '2-3 months',
      database: 'scopus'
    },
    {
      id: 7,
      name: 'Medical Research Progress',
      quartile: 'Q1',
      subjectArea: 'Medicine',
      price: 88000,
      scopusLink: 'https://www.scopus.com/sourceid/404',
      journalLink: 'https://med-research.com',
      acceptanceTime: '1-2 months',
      publicationTime: '1-2 months',
      database: 'scopus'
    },
    {
      id: 8,
      name: 'Computer Networks and Security',
      quartile: 'Q3',
      subjectArea: 'Computer Science',
      price: 52000,
      scopusLink: 'https://www.scopus.com/sourceid/505',
      journalLink: 'https://network-security.org',
      acceptanceTime: '2-3 months',
      publicationTime: '2-3 months',
      database: 'scopus'
    },
    {
      id: 9,
      name: 'Social Policy Journal',
      quartile: 'Q2',
      subjectArea: 'Social Sciences',
      price: 35000,
      scopusLink: 'https://www.scopus.com/sourceid/606',
      journalLink: 'https://social-policy.org',
      acceptanceTime: '3-4 months',
      publicationTime: '2-3 months',
      database: 'scopus'
    },
    {
      id: 10,
      name: 'Digital Arts Review',
      quartile: 'Q3',
      subjectArea: 'Arts & Humanities',
      price: 28000,
      scopusLink: 'https://www.scopus.com/sourceid/707',
      journalLink: 'https://digital-arts-review.com',
      acceptanceTime: '2-3 months',
      publicationTime: '2-3 months',
      database: 'scopus'
    }
  ];

  const filteredJournals = journals.filter(journal => {
    if (journal.database !== activeDatabase) return false;
    if (quartile && journal.quartile !== quartile) return false;
    if (subjectArea && journal.subjectArea !== subjectArea) return false;
    if (priceRange) {
      const [min, max] = priceRange.replace('₹', '').replace(/,/g, '').split('-').map(num => num === '+' ? Infinity : Number(num));
      if (journal.price < min || journal.price > max) return false;
    }
    return true;
  });

  const [copiedId, setCopiedId] = useState(null);

  const copyTemplate = useCallback(async (journal) => {
    const template = `Journal Name: ${journal.name}
Scopus Link: ${journal.scopusLink}
Journal Link: ${journal.journalLink}
Acceptance Time: ${journal.acceptanceTime}
Publication Time: ${journal.publicationTime}
Price: ₹${journal.price.toLocaleString('en-IN')}`;
    try {
      await navigator.clipboard.writeText(template);
      setCopiedId(journal.id);
      setTimeout(() => setCopiedId(null), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, []);

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
            <button 
              className={`copy-button ${copiedId === journal.id ? 'copied' : ''}`}
              onClick={() => copyTemplate(journal)}
              title="Copy journal details"
            >
              {copiedId === journal.id ? (
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                </svg>
              )}
            </button>
            <h3>{journal.name}</h3>
            <div className="journal-details">
              <p><strong>Quartile:</strong> {journal.quartile}</p>
              <p><strong>Subject Area:</strong> {journal.subjectArea}</p>
              <p><strong>Price:</strong> ₹{journal.price.toLocaleString('en-IN')}</p>
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
