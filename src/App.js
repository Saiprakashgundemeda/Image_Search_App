import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import Loading from './components/Loading';
import { searchPhotos } from './api/unsplash';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setError('Please enter a search query');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const results = await searchPhotos(query);
      setImages(results);
    } catch (err) {
      setError('Failed to fetch images. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="header">
        <h1 className="main-heading">Image Search App</h1>
      </header>
      <div className="app">
        <SearchBar onSearch={handleSearch} />
        {error && <div className="error">{error}</div>}
        {loading ? <Loading /> : <ImageList images={images} />}
      </div>
    </>
  );
};

export default App;
