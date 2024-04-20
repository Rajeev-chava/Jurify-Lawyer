
import React from 'react';

import LawyerList from './LawyerList';

const ContentDisplay = ({ results }) => {
  return (
    <div>
      
        {results.map((result) => (
            <LawyerList result={result}/>
          
        ))}
     
    </div>
  );
};

export default ContentDisplay;
