import React, { useState } from 'react';

function WritingService() {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const articles = [
    { id: 1, title: 'Impact of Artificial Intelligence on Healthcare Systems: A Systematic Review', category: 'Healthcare' },
    { id: 2, title: 'Machine Learning Applications in Early Disease Detection', category: 'Healthcare' },
    { id: 3, title: 'Blockchain Technology: Revolutionizing Supply Chain Management', category: 'Technology' },
    { id: 4, title: 'Sustainable Energy Solutions for Smart Cities', category: 'Environment' },
    { id: 5, title: 'Cybersecurity Challenges in IoT Devices', category: 'Technology' },
    { id: 6, title: 'Climate Change Impact on Biodiversity', category: 'Environment' },
    { id: 7, title: 'Neural Networks in Natural Language Processing', category: 'Technology' },
    { id: 8, title: 'Renewable Energy Integration in Power Grids', category: 'Environment' },
    { id: 9, title: 'Digital Transformation in Education Post-COVID', category: 'Education' },
    { id: 10, title: 'Gene Therapy Advancements in Cancer Treatment', category: 'Healthcare' },
    { id: 11, title: 'Big Data Analytics in Business Decision Making', category: 'Business' },
    { id: 12, title: 'Smart Agriculture: IoT Applications in Farming', category: 'Agriculture' },
    { id: 13, title: 'Mental Health Impact of Social Media Usage', category: 'Psychology' },
    { id: 14, title: 'Quantum Computing: Current State and Future Prospects', category: 'Technology' },
    { id: 15, title: 'Sustainable Urban Planning Strategies', category: 'Environment' },
    { id: 16, title: 'Remote Work Impact on Employee Productivity', category: 'Business' },
    { id: 17, title: 'Microplastics in Marine Ecosystems', category: 'Environment' },
    { id: 18, title: '5G Technology Impact on Digital Communication', category: 'Technology' },
    { id: 19, title: 'Personalized Medicine Through Genomics', category: 'Healthcare' },
    { id: 20, title: 'Electric Vehicles: Market Trends and Challenges', category: 'Automotive' },
    { id: 21, title: 'Cloud Computing Security Frameworks', category: 'Technology' },
    { id: 22, title: 'Sustainable Fashion: Environmental Impact', category: 'Environment' },
    { id: 23, title: 'Digital Privacy in the Age of Big Data', category: 'Technology' },
    { id: 24, title: 'Renewable Energy Storage Solutions', category: 'Environment' },
    { id: 25, title: 'Virtual Reality in Medical Training', category: 'Healthcare' },
    { id: 26, title: 'Autonomous Vehicles: Safety Standards', category: 'Automotive' },
    { id: 27, title: 'Circular Economy Business Models', category: 'Business' },
    { id: 28, title: 'Space Tourism: Technical Challenges', category: 'Aerospace' },
    { id: 29, title: 'Blockchain in Digital Voting Systems', category: 'Technology' },
    { id: 30, title: 'Green Building Technologies', category: 'Architecture' },
    { id: 31, title: 'AI Ethics and Governance', category: 'Technology' },
    { id: 32, title: 'Sustainable Water Management', category: 'Environment' },
    { id: 33, title: 'Telemedicine: Opportunities and Challenges', category: 'Healthcare' },
    { id: 34, title: 'Digital Currency Impact on Banking', category: 'Finance' },
    { id: 35, title: 'Smart Grid Implementation Strategies', category: 'Energy' },
    { id: 36, title: 'Ocean Acidification Effects', category: 'Environment' },
    { id: 37, title: 'Quantum Cryptography Applications', category: 'Technology' },
    { id: 38, title: 'Sustainable Tourism Practices', category: 'Tourism' },
    { id: 39, title: 'AI in Drug Discovery', category: 'Healthcare' },
    { id: 40, title: 'Robotic Process Automation in Business', category: 'Business' },
    { id: 41, title: 'Smart Home Energy Management', category: 'Energy' },
    { id: 42, title: 'Digital Twin Technology Applications', category: 'Technology' },
    { id: 43, title: 'Sustainable Packaging Solutions', category: 'Environment' },
    { id: 44, title: 'Edge Computing in IoT', category: 'Technology' },
    { id: 45, title: 'Precision Agriculture Technologies', category: 'Agriculture' },
    { id: 46, title: 'Renewable Energy Economics', category: 'Energy' },
    { id: 47, title: 'Augmented Reality in Education', category: 'Education' },
    { id: 48, title: 'Waste-to-Energy Technologies', category: 'Environment' },
    { id: 49, title: 'Digital Health Platforms', category: 'Healthcare' },
    { id: 50, title: 'Smart City Infrastructure', category: 'Urban Planning' },
    
    // Natural Sciences
    { id: 51, title: 'Quantum Entanglement in Molecular Systems', category: 'Physics' },
    { id: 52, title: 'Novel Catalysts for Green Chemistry Applications', category: 'Chemistry' },
    { id: 53, title: 'CRISPR Gene Editing in Plant Species', category: 'Biology' },
    { id: 54, title: 'Plate Tectonics and Seismic Activity Patterns', category: 'Earth Sciences' },
    { id: 55, title: 'Dark Matter Distribution in Galaxy Clusters', category: 'Astronomy' },
    
    // Social Sciences
    { id: 56, title: 'Social Media Impact on Community Relationships', category: 'Sociology' },
    { id: 57, title: 'Cognitive Development in Digital Age', category: 'Psychology' },
    { id: 58, title: 'Cryptocurrency Effects on Global Markets', category: 'Economics' },
    { id: 59, title: 'Democracy in the Era of Digital Manipulation', category: 'Political Science' },
    { id: 60, title: 'Cultural Evolution in Modern Societies', category: 'Anthropology' },
    
    // Humanities
    { id: 61, title: 'Ancient Trade Routes and Cultural Exchange', category: 'History' },
    { id: 62, title: 'Modern Poetry in Digital Communication', category: 'Literature' },
    { id: 63, title: 'Ethics of Artificial Intelligence', category: 'Philosophy' },
    { id: 64, title: 'Digital Art and NFT Markets', category: 'Art' },
    
    // Engineering and Technology
    { id: 65, title: 'Quantum Algorithm Optimization', category: 'Computer Science' },
    { id: 66, title: 'Advanced Materials in Aerospace', category: 'Mechanical Engineering' },
    { id: 67, title: 'Smart Grid Technologies', category: 'Electrical Engineering' },
    
    // Medical and Health Sciences
    { id: 68, title: 'mRNA Vaccine Development', category: 'Medicine' },
    { id: 69, title: 'Telenursing in Rural Healthcare', category: 'Nursing' },
    { id: 70, title: 'Pandemic Response Strategies', category: 'Public Health' },
    { id: 71, title: 'Personalized Drug Delivery Systems', category: 'Pharmacology' },
    
    // Agricultural Sciences
    { id: 72, title: 'Drought-Resistant Crop Development', category: 'Agronomy' },
    { id: 73, title: 'Sustainable Food Packaging', category: 'Food Science' },
    { id: 74, title: 'Urban Forest Management', category: 'Forestry' },
    
    // Interdisciplinary Fields
    { id: 75, title: 'Climate Change Adaptation Strategies', category: 'Environmental Studies' },
    { id: 76, title: 'Predictive Analytics in Healthcare', category: 'Data Science' },
    { id: 77, title: 'Neural Networks in Climate Modeling', category: 'Artificial Intelligence' }
  ];

  const filteredArticles = articles.filter(article =>
    article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="writing-service">
      <h2>Research Article Writing Service</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="articles-list">
        {filteredArticles.map(article => (
          <div key={article.id} className="article-item">
            <button
              className={`copy-button ${copiedId === article.id ? 'copied' : ''}`}
              onClick={() => handleCopy(article.title, article.id)}
              title="Copy title"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {copiedId === article.id ? (
                  <path d="M20 6L9 17l-5-5" />
                ) : (
                  <>
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                    <path d="M8 10h8M8 14h8M8 18h8" />
                  </>
                )}
              </svg>
            </button>
            <h3>{article.title}</h3>
            <p>Category: {article.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WritingService;
