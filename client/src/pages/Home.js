import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Row from '../components/Row';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <Banner />
      <Row title="Trending Now" />
      <Row title="Top Rated Movies" />
      <Row title="Action Movies" />
      <Footer />
      {/* Add more rows as needed */}
    </div>
  );
};

export default Home;