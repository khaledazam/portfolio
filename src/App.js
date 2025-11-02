import React from 'react';
import { Toaster } from 'react-hot-toast';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
    <Toaster position="top-right" reverseOrder={false} />
  </div>
);

export default App;
