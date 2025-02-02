import React from 'react';

const Banner = () => {
  return (
    <div 
      className="banner"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225-xl.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '100vh',
        width: '100vw',
        position: 'relative',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to Netflix</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Unlimited movies, TV shows, and more.</p>
      <button 
        style={{
          padding: '0.8rem 2rem',
          fontSize: '1.2rem',
          backgroundColor: '#e50914',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#f40612'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#e50914'}
      >
        Get Started
      </button>
    </div>
  );
};

export default Banner;