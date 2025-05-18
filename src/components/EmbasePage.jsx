import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  animation: ${fadeIn} 0.6s ease-out;
`;

const TemplateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
`;

const Card = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9));
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #9c27b0, #673ab7);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);

    &:before {
      opacity: 1;
    }
  }
`

const Title = styled.h2`
  color: #9c27b0;
  margin-bottom: 1.25rem;
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.2;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, #9c27b0, #673ab7);
    border-radius: 2px;
  }
`

const Description = styled.p`
  color: #555;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.9;
`

const UsageList = styled.ul`
  color: #444;
  padding-left: 1.5rem;
  margin-top: 1.5rem;
  list-style-type: none;
  position: relative;
`

const UsageItem = styled.li`
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  line-height: 1.6;
  opacity: 0.85;
  transition: opacity 0.2s ease;

  &:before {
    content: '•';
    color: #9c27b0;
    font-size: 1.5em;
    margin-right: 0.75rem;
    margin-left: -1.5rem;
  }

  &:hover {
    opacity: 1;
  }
`

const EmbasePage = () => {
  const templates = [
    {
      title: "Quick Search Template",
      description: "Basic template for rapid biomedical literature searches in Embase.",
      usage: [
        "Enter medical terms or drug names",
        "Select index fields",
        "Apply quick filters"
      ]
    },
    {
      title: "Drug Search Template",
      description: "Specialized template for searching drug-related information.",
      usage: [
        "Enter drug name or class",
        "Select drug subheadings",
        "Filter by study type"
      ]
    },
    {
      title: "Disease Search Template",
      description: "Template for searching disease-specific literature.",
      usage: [
        "Enter disease terms",
        "Use Emtree terms",
        "Filter by evidence level"
      ]
    },
    {
      title: "Clinical Trial Search",
      description: "Template for finding clinical trial studies in Embase.",
      usage: [
        "Select trial phase",
        "Filter by study design",
        "Specify population groups"
      ]
    },
    {
      title: "Advanced Search Template",
      description: "Complex search template with Emtree terms and field codes.",
      usage: [
        "Use Emtree hierarchy",
        "Combine multiple concepts",
        "Apply precision indexes"
      ]
    }
  ];

  return (
    <PageContainer>
      <TemplateGrid>
        {templates.map((template, index) => (
          <Card key={index}>
            <Title>{template.title}</Title>
            <Description>{template.description}</Description>
            <UsageList>
              {template.usage.map((item, i) => (
                <UsageItem key={i}>{item}</UsageItem>
              ))}
            </UsageList>
          </Card>
        ))}
      </TemplateGrid>
    </PageContainer>
  );
};

export default EmbasePage;