import React from 'react';
import LawyerList from './LawyerList';

const ContentDisplay = ({ results }) => {
  console.log('ContentDisplay results:', results); // Debug: show the data

  if (!results || results.length === 0) {
    return <div className="text-center mt-4">No lawyers found.</div>;
  }

  return (
    <div className="container mt-4">
      {results.map((result) => (
        <LawyerList key={result._id} result={result} />
      ))}
    </div>
  );
};

export default ContentDisplay;
