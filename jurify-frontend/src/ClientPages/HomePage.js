import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import ContentDisplay from '../Components/ContentDisplay'
import { Button } from 'react-bootstrap';

function HomePage() {
  const dummyData = [
    { id: 1, Name: 'Dummy Result 1', profession: 'criminal', location: 'guntur', address: 'xyz', contact: 98382973 },
    { id: 2, Name: 'Dummy Result 2', profession: 'contract', location: 'guntur', address: 'xyz', contact: 98382973 },
    { id: 3, Name: 'Dummy Result 3', profession: 'notery', location: 'guntur', address: 'xyz', contact: 98382973 },
  ];
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(dummyData);
  const [active,setActive]=useState('home');
  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/alllawyers');
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching lawyers:', error);
      }
    };

    fetchLawyers();
  }, []);

  const handleSearch = async () => {
    setResults(dummyData.filter(comp));

    function comp(a) {
      if (query === '') return dummyData;
      if (a.profession === query)
        return a.profession === query;
      if (a.location === query)
        return a.location === query;
      if (a.contact === query)
        return a.contact === query;
    }
  };
  let content;
  if(active==='home'){
    content=<></>
  }

  return (
    <div>
      <div className='d-flex justify-content-center align-items-center pt-5 '>
        <SearchBar onSearch={setQuery} />
        <Button className='mx-2 my-2  flex justify-center items-center rounded-[8px]' onClick={handleSearch} >
          <span className='font-[gilroy] capitalize ' >search</span>
        </Button>
      </div>
      <ContentDisplay results={results} />
    </div>
  );
}

export default HomePage;
