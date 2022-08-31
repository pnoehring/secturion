import React, { useState } from 'react';
import '../App.js';
import './Expander.css';

const titleStyle = {
  padding: '10px',
  flex: 'none',
  indent: 10
};

const spacerStyle = {
  flex: '1'
};

const iconStyle = {
  padding: '10px',
  flex: 'none'
};

const contentStyle = {
  overflow: 'hidden',
  transition: 'all 0.3s'
};

const contentExpandedStyle = {
  ...contentStyle,
  padding: '4px 0',
  height: 'auto',
  filter: 'opacity(1)'
};

const contentCollapsedStyle = {
  ...contentStyle,
  padding: '0 0',
  height: '0',
  filter: 'opacity(0)'
};

export const Expander = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);
  const handleHeaderClick = () => {
    setExpanded(expanded => !expanded);
  };
  return (
    <div className='expanderStyle'>
      <div className='headerStyle' onClick={handleHeaderClick}>
        <div style={titleStyle}>{title}</div>
        <div style={spacerStyle} />
        <div style={iconStyle}>
          <i className={expanded ? 'fas fa-chevron-up' : 'fas fa-chevron-down'} />
        </div>
      </div>
      <div style={expanded ? contentExpandedStyle : contentCollapsedStyle} className='children-text'>
        {children}
      </div>
    </div>
  );
};