import React, { useState } from 'react';
import '../css/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is TCA?",
      answer: "TCA is the University of Washington's premiere student-run technology consultancy. \
              We offer a variety of services tailored at helping companies solve their problems \
              using technologies and help students foster the consulting skills they need to \
              succeed in the industry."
    },
    {
      question: "How can I become a member?",
      answer: "TCA accepts a new cohort every quarter. Check out the 'Join' page for more information!"
    },
    {
      question: "What majors does TCA accept?",
      answer: "While we are affiliated with the Foster School of Business, we hire members \
              across every major! TCA has both a tech team and a business teams, so as long as \
              you're interested in joining onr of these groups, we highly encourage you to apply!"
    }
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => handleToggle(index)}>
              {item.question}
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
