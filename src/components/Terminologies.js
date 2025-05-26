import React, { useState } from 'react';

function Terminologies() {
  const [searchTerm, setSearchTerm] = useState('');
  const terms = [
    // A-D
    { id: 'a', term: 'Article Indexing in Scopus', description: 'Scopus-indexed journals 2023 are considered better sources for citation than other databases. Journal titles from the Scopus database are recognized by scholars in the field of research and academy.' },
    { id: 'b', term: 'Acceptance Letter', description: 'It is the formal acceptance provided to the author when their research article is accepted for publication. It is a confirmation letter shared as a proof for the acceptance of the research paper.' },
    { id: 'c', term: 'Article review', description: 'A review article is an article that summarises the current state of understanding on a topic within a certain discipline. A review article is generally considered a secondary source since it may analyse and discuss the method and conclusions in previously published studies.' },
    { id: 'd', term: 'Article submission', description: 'It is basically the submission of a research article on the dashboard of a particular journal sent by the author for further copy editing, formatting and publishing stages.' },
    { id: 'e', term: 'DOI', description: 'It is known as Digital Object Identifier. It is a string of numbers, letters and symbols used to permanently identify an article and document and link to it on the web.' },
    
    // G-J
    { id: 'f', term: 'Google scholar', description: 'Google Scholar is a freely accessible web search engine that indexes the full text or metadata of scholarly literature across an array of publishing formats and disciplines.' },
    { id: 'g', term: 'H-Index', description: 'The h-index is an author-level metric that measures both the productivity and citation impact of the publications, initially used for an individual scientist or scholar.' },
    { id: 'h', term: 'Journal Impact Factor', description: 'Impact factor is commonly used to evaluate the relative importance of a journal within its field and to measure the frequency with which the "average article" in a journal has been cited in a particular time period.' },
    { id: 'i', term: 'Journal', description: 'It is the scientific term used for all the articles which are published on a particular subject or area. The Journal is given indexing.' },
    
    // M-P
    { id: 'j', term: 'Manuscript template', description: 'A manuscript is the work that an author submits to a publisher, editor, or producer for publication. In publishing, "manuscript" can also refer to one or both of the following - the format standard for a short story manuscript, an accepted manuscript format, distributed in advance as a preprint.' },

    
    // R-S
    { id: 'm', term: 'Review type', description: 'There are 2 types of Review : SINGLE-BLIND PEER REVIEW - It\'s a conventional method of peer review where the authors do not know who the reviewers are. However, the reviewers know who the authors are. DOUBLE-BLIND REVIEW - Both the reviewer and author identities are concealed from the reviewers, and vice versa, throughout the review process.' },
    { id: 'n', term: 'Review Guidelines', description: 'Reviewers review articles based on following guidelines which include Introduction, Conflict of Interest, Confidentiality, Plagiarism, Fairness, Review reports, Timeliness, Recommendations, Resources.' },
    { id: 'o', term: 'Scope of Journal', description: 'Academic journals are a favoured source of academic information. They usually offer a more current view than do text books, and have credibility due to the peer-review process under which journal articles ("papers") submitted by researchers are evaluated by experts in the field before being published.' },
    { id: 'p', term: 'Scopus', description: 'Scopus is an abstract and indexing database that is produced by the Elsevier Co. The Scopus database provides access to STM journal articles and the references included in those articles.' },
    
    // T-W
    { id: 'r', term: 'UGC', description: 'University Grants Commission (UGC) is a statutory body set up by the Department of Higher Education, Ministry of Education, Government of India in accordance with the UGC Act 1956 and is charged with coordination, determination and maintenance of standards of higher education in India.' },
    { id: 's', term: 'Volume issue', description: 'Volume refers to the number of years the publication has been circulated and issue is the particular issue in that year/month.' },
    { id: 't', term: 'Web of Science', description: 'The Web of Science is a paid-access platform that provides access to multiple databases that provide reference and citation data from academic journals, conference proceedings, and other documents in various academic disciplines.' },
    
    // Additional Terms
    { id: 'u', term: 'NAAC', description: 'The National Assessment and Accreditation Council (NAAC) is a government organisation in India that assesses and accredits Higher Education Institutions (HEIs). It is an autonomous body funded by the University Grants Commission and headquartered in Bangalore.' },
    { id: 'v', term: 'MDPI', description: 'MDPI (Multidisciplinary Digital Publishing Institute) is a publisher of open access scientific journals. It now publishes over 390 peer-reviewed, open access journals.' },
    { id: 'w', term: 'Predatory Journal', description: 'Predatory journals also called fraudulent, deceptive, or pseudo-journals are publications that claim to be legitimate scholarly journals, but misrepresent their publishing practices.' },

    { id: 'y', term: 'API Score', description: 'ACADEMIC PERFORMANCE INDICATORS (APIs) is the scoring given to professors or institutions in order to evaluate their performances.' },
    { id: 'z', term: 'Editorial board', description: 'Those who are engaged in the journal process and show a real interest in growing and developing the publication.' },
    { id: 'aa', term: 'Advisory board', description: 'An advisory board is a group of experts who lend their skills, guidance, and knowledge to an organisation (corporation, nonprofit, or association).' },
    { id: 'bb', term: 'NMC', description: 'National Medical Commission (NMC) is an Indian regulatory body of 33 members which regulates medical education and medical professionals. It replaced the Medical Council of India on 25 September 2020. The Commission grants recognition of medical qualifications, gives accreditation to medical schools, grants registration to medical practitioners, and monitors medical practice and assesses the medical infrastructure in India.' },
    { id: 'cc', term: 'Correction', description: 'If there is any error in the article, they should be corrected before the final publishing of the article.' },
    { id: 'dd', term: 'Modification', description: 'Before the final publishing of the article some modifications need to be made like for example abstract should be in italics, numbering of the references should be done appropriately.' },
    { id: 'ee', term: 'Plagiarism', description: 'Presenting someone else\'s work or ideas as your own, with or without their consent, by incorporating it into your work as reference/source.' },
    { id: 'ff', term: 'Publisher', description: 'After approval of the galley proof, the publisher publishes the research articles.' },


    { id: 'hh', term: 'Cloned Journal', description: 'Clone journal web pages are a counterfeit mirror of an authentic journal that exploit the title and ISSN of legitimate journals.' },
    { id: 'ii', term: 'Y Index', description: 'Y Index' },
    { id: 'jj', term: 'Regular issue', description: 'Articles that are received directly from the authors will be eligible to further process for the regular issue of the journal.' },
    { id: 'kk', term: 'Meta data', description: 'The metadata is the content in the uploaded article. The article title, the abstract, keywords and the references should be entered.' },
    { id: 'll', term: 'Special issue', description: 'Articles that are received directly from the either conference organiser or institution will be eligible to further process for the special issue of the journal.' },
    { id: 'mm', term: 'Current issue', description: 'The ongoing issue of the month.' },
    { id: 'nn', term: 'ISBN', description: 'The International Standard Book Number (ISBN) is a 13-digit number that uniquely identifies books and book-like products published internationally. The ISBN is intended for a monographic publication: text that stands on its own as a product, whether printed, audio or electronic.' },
    { id: 'oo', term: 'DOAJ', description: 'The Directory of Open Access Journals is a website that hosts a community-curated list of open access journals, maintained by Infrastructure Services for Open Access. It was launched in 2003 with 300 open access journals.' },
    { id: 'pp', term: 'Chief editor', description: 'An editor-in-chief (EIC), also known as lead editor or chief editor, is a publication\'s editorial leader who has final responsibility for its operations and policies.' },
    { id: 'qq', term: 'Bank transfer', description: 'The payment is done via Bank transfer on the details mentioned on the invoice.' },
    { id: 'rr', term: 'PayPal', description: 'Payment is sent to the author via their email with 6% extra charge.' },
    { id: 'ss', term: 'Money gram', description: 'Moneygram is provided to the author when they demand for it.' },
    { id: 'tt', term: 'Western Union', description: 'Western Union is provided to the author when they ask for it.' },
    { id: 'uu', term: 'Payment gateway', description: 'It is also a payment method which authorizes the credit card or direct payments for all purchases, online retailers etc.' },
    { id: 'vv', term: 'Conference proceeding', description: 'A conference proceeding is the published record of a conference, congress, symposium, or other meeting sponsored by a society or association, usually consisting of abstracts or reports of papers presented by the participants.' },
    { id: 'ww', term: 'Paper presentation in conference', description: 'The presentation should include an introduction into your hypothesis, a brief description of the methods, tables and/or graphs related to your findings, and an explanation of your data. The presentation should be time-lined so the work should be planned accordingly and then presented. For example, plan on talking about 1 minute per slide.' },
    { id: 'xx', term: 'Copyediting', description: 'Copyediting includes THE ACCEPTANCE & INVOICE: 1. The Acceptance: After confirmation from the reviewers the letter of acceptance will be provided to the author. Confirming that the article is accepted for publication. 2. The Invoice: All the countries are divided into 2 categories as per the country GDP. The invoice will be made on the corresponding category along according to the country. This invoice will be sent to the author. The payment will be done via Bank transfer/Western Union/Moneygram. Once the payment is completed and we receive the confirmation then we move forward to the production stage.' },
    { id: 'yy', term: 'Proofreading', description: 'Proofreading involves reading your document to correct the smaller typographical, grammatical, and spacing errors. Proofreading is usually the very last step you take before sending off the final draft of your work for evaluation or publication.' },
    { id: 'zz', term: 'Document format type', description: 'doc,docx,pdf or rtf formats are generally accepted.' },
    { id: 'aaa', term: 'Article writing', description: 'Article writing should be done in such a way, which is easy for the readers to read and understand and should be in an appropriate format if possible.' },
    { id: 'bbb', term: 'Ghost writing', description: 'Ghostwriting is the process of writing a piece of copy under someone else\'s name. For example, as a freelancer, you might be hired to write a blog post that will be published under the CEO\'s name.' },
    { id: 'ccc', term: 'Authorship positioning', description: 'Authorship positioning is the position of the author of a scientific publication among their co-authors. All of the authors of a publication have made a significant contribution to the research project and to the draft manuscript.' },
    { id: 'ddd', term: 'Post publication queries', description: 'These are some of the post-publication queries: 1. Why my article not shown when notified? 2. The article DOI Quality takes 2-3 days to get activated or sometimes it gets activated immediately. If still getting an error, then an error report will be filed to get the reason for not getting activated. 3. Why is my article not seen on Google Scholar(google.com)? A. The article will be automatically indexed, or you need to manually submit it on Google Scholar(google.com) B. Reply comes the next on the published galley proof C. For small errors we do correct the error for huge errors we charge some minimal error negligence charge from the author.' },
    { id: 'eee', term: 'Back date publication', description: 'If the author could not submit the research article on the desired time then Some journals can publish those research articles with a previous date or might be the previous year on it.' },

    { id: 'fff', term: 'Publication Frequency', description: 'Periodicals are often characterised by their period (or frequency) of publication. PERIOD - FREQUENCY: ANNUALLLY - 1 Per Year, BI-ANNUALLY - 2 Per Year, TRI-ANNUALLY - 3 Per Year, QUARTERLY - 4 Per year' },
    { id: 'ggg', term: 'Journal Indexing', description: 'Journal Indexing is basically a rating agency for the journal. Being indexed in a known database will help increase the journal\'s readership.' },
    { id: 'hhh', term: 'Author', description: 'Author is a person who has made a substantial contribution to the conception or design of the work, or the acquisition, analysis, or interpretation of data for the work. They are responsible and accountable for the results of the published work.' },
    { id: 'iii', term: 'Co-author', description: 'Any person who has made a significant contribution to a journal article. They also share responsibility and accountability for the results of the published research.' },
    { id: 'jjj', term: 'Affiliation', description: 'In academic publishing, the affiliation of an author is the place (institution) at which the author conducted the research that they have reported / written about.' },
    { id: 'kkk', term: 'Abstract', description: 'An abstract should be a brief summary of your paper, which readers can use to decide whether it\'s relevant to them before they dive in to read the paper. It should have a brief introduction of the research that was conducted.' },
    { id: 'lll', term: 'Conclusion', description: 'The conclusion is intended to help the reader understand why that research should matter to the readers after they have finished reading the paper. A conclusion is not merely a summary of your points or a re-statement of your research problem but a synthesis of key points.' },
    { id: 'mmm', term: 'Reference', description: 'Referencing allows you to acknowledge the contribution of other writers and researchers in your work.' },
    { id: 'nnn', term: 'Reference styling', description: 'These are the following reference styling generally used in research articles: • APA (American Psychological Association) is used by Education, Psychology, and Sciences. • MLA (Modern Language Association) style is used by the Humanities. • Chicago/Turabian style is generally used by Business, History, and the Fine Arts.' },
    { id: 'ooo', term: 'Article format', description: 'Every journal has a different article formatting style, but in general an article must have the Title, author\'s name, their affiliation, abstract, introduction, keywords, methodology, results and discussion, conclusion, acknowledgement and Referencing.' },
    { id: 'ppp', term: 'Payment modes', description: 'We consider different kinds of payment methods also through the country representatives and by USDT or Bitcoin. Following are the different modes of payments accepted: - Bank transfer, Paypal, Western union, Ria Money, Moneygram.' },

    { id: 'rrr', term: 'Publication of article', description: 'An article or piece is a written work published in a print or electronic medium. It may be for the purpose of propagating news, research results, academic analysis, or debate.' },
    { id: 'sss', term: 'Close Access', description: 'Only visible to people at institutions which have a license for these specific journals.' },
    { id: 'ttt', term: 'Open access', description: 'Research publications freely available online to all at no cost and with limited restrictions on reuse.' },
    { id: 'uuu', term: 'Semi access', description: 'It is the combination of open and closed access. In this registration is mandatory.' },
    { id: 'vvv', term: 'ORCID ID', description: 'ORCID provides a persistent digital identifier (an ORCID iD) that you own and control, and that distinguishes you from every other researcher.' },
    { id: 'www', term: 'Research Gate', description: 'ResearchGate is the professional network for scientists and researchers. They help researchers to connect and make it easy for them to share and access scientific output, knowledge, and expertise.' },
    { id: 'xxx', term: 'SJR', description: 'The SCImago Journal & Country Rank is a publicly available portal that includes the journals and country scientific indicators developed from the information contained in the Scopus® database. These indicators can be used to assess and analyze scientific domains. Journals can be compared or analysed separately. Country rankings may also be compared or analysed separately.' },
    { id: 'yyy', term: 'OJS', description: 'Open Journal Systems, also known as OJS, is a free software for the management of peer-reviewed academic journals, created by the Public Knowledge Project and released under the GNU General Public License.' },
    
    { id: 'ffff', term: 'Article Indexing', description: 'Scopus-indexed journals 2023 are considered better sources for citation than other databases. Journal titles from the Scopus database are recognized by scholars in the field of research and academy. There are some pre-selection criteria which includes peer-review, English abstract, Regular publication, References in Roman script, Publication ethics statement. Few warnings for poor papers, which results in rejection of the research articles include Editors and authors from the same institution, Plagiarism, Poor figures, Bad grammar, Flawed science, Uneven quality, Poor homepage, Lack of journal focus.' },
    { id: 'hhhh', term: 'Galley proof', description: 'Galley proofs were used in the editing and proof-reading process. Some publishers use paper galley proofs as advance copies, providing them to reviewers, magazines, and libraries in advance of final publication.' },
    { id: 'jjjj', term: 'DOI Prefix', description: 'The DOI prefix is used as a namespace so that DOIs are globally unique without requiring global coordination for every new identifier. Prefixes are a handle system and therefore all DOIs prefixes are numbers without any semantic meaning.' },
    { id: 'kkkk', term: 'Publication Charges', description: 'The article processing charges taken from the author for publication of their research articles. It depends on the country\'s GDP.' },
   
    { id: 'nnnn', term: 'Peer review', description: 'Peer review is the evaluation of work by one or more people with similar competencies as the producers of the work i.e. experts in the same field (peers) and is considered necessary to ensure academic scientific quality.' },
    { id: 'oooo', term: 'Indexing', description: 'Indexation of a journal is considered a reflection of its quality. Indexed journals are considered to be of higher scientific quality as compared to non-indexed journals. Publishing a research in an indexed journal increases the credibility and visibility of the author\'s work. The indexed journals have advanced online presence, improved article discoverability, and are reputable for high-quality publication in their own field.' },
    { id: 'qqqq', term: 'Citation', description: 'A citation is a reference to a source. More precisely, a citation is an abbreviated alphanumeric expression embedded in the body of an intellectual work that denotes an entry in the bibliographic references section of the work for the purpose of acknowledging the relevance of the works of others to the topic of discussion at the spot where the citation appears.' },
   
   
  ];

  const filteredTerms = terms.filter(term => 
    term.term.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="terminologies">
      <h2>Publication Terminologies</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search terminologies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="terms-grid">
        {filteredTerms.map(item => (
          <div key={item.id} className="term-card">
            <h3>{item.term}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Terminologies;
