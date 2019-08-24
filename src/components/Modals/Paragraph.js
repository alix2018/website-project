import React from 'react';
import './Paragraph.css';

const parse = require('html-react-parser');

function Paragraph({children}) {
  return (
    <div className="row">
      <div className="column title">
        <div className="context">{children.context}</div>
        <div className="line-context"/>
      </div>
      <div className="column text">
        <p>{parse(children.text)}</p>
      </div>
    </div>
  );
}

export default Paragraph;
