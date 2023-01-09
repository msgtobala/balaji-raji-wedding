import React from 'react';

const SectionTitle = (props) => {
  return (
    <div className="wpo-section-title">
      <div className="section-title-icon">
        <i className="fi flaticon-dove"></i>
      </div>
      <h2 id="scroll-to-feedback">{props.MainTitle}</h2>
    </div>
  );
};

export default SectionTitle;
