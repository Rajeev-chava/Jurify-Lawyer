import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import ContentDisplay from '../Components/ContentDisplay';
import { Button } from 'react-bootstrap';

function HomePage() {
  const [query, setQuery] = useState('');
  const [allLawyers, setAllLawyers] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/alllawyers');
        const data = await response.json();
        setAllLawyers(data);
        setFilteredResults(data);
      } catch (error) {
        console.error('Error fetching lawyers:', error);
      }
    };

    fetchLawyers();
  }, []);

  const handleSearch = () => {
    const lowerQuery = query.toLowerCase();
    const filtered = allLawyers.filter((lawyer) =>
      lawyer.profession?.toLowerCase().includes(lowerQuery) ||
      lawyer.location?.toLowerCase().includes(lowerQuery) ||
      lawyer.contact?.toString().includes(lowerQuery)
    );

    setFilteredResults(filtered);
  };

  return (
    <div className="px-4 py-6">
      <div className="d-flex justify-content-center align-items-center pt-5">
        <SearchBar onSearch={setQuery} />
        <Button
          className="mx-2 my-2 flex justify-center items-center rounded-[8px]"
          onClick={handleSearch}
        >
          <span className="font-[gilroy] capitalize">Search</span>
        </Button>
      </div>

      <ContentDisplay results={filteredResults} />
    </div>
  );
}

export default HomePage;
