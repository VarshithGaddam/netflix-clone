import React from 'react';
import Header from '../components/Header';
import Row from '../components/Row';

const Browse = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <Row title="My List" fetchUrl="/api/my-list" />
      <Row title="Comedies" fetchUrl="/api/comedies" />
      <Row title="Horror Movies" fetchUrl="/api/horror" />
      {/* Add more rows as needed */}
    </div>
  );
};

export default Browse;