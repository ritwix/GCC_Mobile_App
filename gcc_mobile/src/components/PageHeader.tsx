import React from 'react';
import './PageHeader.css';
import CsLogo from '../assets/logo/credit_suisse_sp_rgb_fo_100mm.png';

const PageHeader: React.FC<{ title: string }> = (props) => {
  const { title } = props;
  return (
    <div className="cs-toolbar">
      <h2>{title}</h2>
      <a href="https://www.credit-suisse.com/in/en.html">
        <img src={CsLogo} alt="Credit Suisse Logo" />
      </a>
    </div>
  );
};

export default PageHeader;
