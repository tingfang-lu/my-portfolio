import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ImageComponent from './components/ImageComponent';
import VideoComponent from './components/VideoComponent';
import TextComponent from './components/TextComponent';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My Portfolio</h1>
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<TextComponent />} />
            <Route path="/projects" element={<ImageComponent />} />
            <Route path="/blog" element={<VideoComponent />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
