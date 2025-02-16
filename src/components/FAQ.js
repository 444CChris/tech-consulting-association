import React, { useState } from 'react';
import '../css/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        <div className="faq-item">
          <div className="faq-question" onClick={() => handleToggle(0)}>
            What is the Tech Consulting Association?
            <span>{activeIndex === 0 ? '-' : '+'}</span>
          </div>
          <div className={`faq-answer ${activeIndex === 0 ? 'show' : ''}`}>
            idk insert random text here
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => handleToggle(1)}>
            How can I become a member?
            <span>{activeIndex === 1 ? '-' : '+'}</span>
          </div>
          <div className={`faq-answer ${activeIndex === 1 ? 'show' : ''}`}>
            More random member text
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
