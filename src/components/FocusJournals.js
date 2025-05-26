import React from 'react';

function FocusJournals() {
  const journals = [
    { id: 1, name: 'Nature', impactFactor: 49.962, priority: 'High' },
    { id: 2, name: 'Science', impactFactor: 41.845, priority: 'High' },
    { id: 3, name: 'IEEE Transactions', impactFactor: 9.237, priority: 'Medium' }
  ];

  return (
    <div className="focus-journals">
      <h2>Focus Journals for Authorship</h2>
      <div className="journals-grid">
        {journals.map(journal => (
          <div key={journal.id} className="journal-card">
            <h3>{journal.name}</h3>
            <p>Impact Factor: {journal.impactFactor}</p>
            <p>Priority: {journal.priority}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FocusJournals;
