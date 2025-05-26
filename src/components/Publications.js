import React from 'react';

function Publications() {
  const templates = [
    { id: 1, name: 'Scientific Journal Template', format: 'IEEE' },
    { id: 2, name: 'Research Paper Template', format: 'APA' },
    { id: 3, name: 'Conference Paper Template', format: 'ACM' }
  ];

  return (
    <div className="publications">
      <h2>Journal Templates</h2>
      <div className="templates-grid">
        {templates.map(template => (
          <div key={template.id} className="template-card">
            <h3>{template.name}</h3>
            <p>Format: {template.format}</p>
            <button>Download Template</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Publications;
