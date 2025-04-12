import { HashRouter as Router, Routes, Route, } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Catalog from '../catalog/Catalog';
import Content from '../content/Content';
import Contacts from '../contacts/Contacts';
import ComplexFlats from '../complexFlats/complexFlats';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import ScrollToTopButton from '../scrollToTop/ScrollToTop';
import Card from '../../pages/Card';
import data from '../../utils/dataexample'
import './App.css';
import FavoritesPage from '../../pages/FavoritesPage';

const App = () => {
  const [propertiesData, setPropertiesData] = useState([]);

  useEffect(() => {
    const mockData = data;
    setPropertiesData(mockData);
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Content />} />
            <Route 
              path='/catalog' 
              element={<Catalog data={propertiesData} />} 
            />
            <Route path="/complex/:complexId" element={<ComplexFlats data={data}/>} />
            <Route path="/card/:id" element={<Card />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/favorites' element={<FavoritesPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
