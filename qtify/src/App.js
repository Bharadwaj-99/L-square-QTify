import { useState, useEffect} from 'react';
import './App.css';

import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import { fetchTopAlbums } from './components/api/api';
import Card from './components/Card/Card';

function App() {
  const [topAlbumsData,setTopAlbumsData] = useState([]);

  const generatetopAlbumsData = async() => {
    
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);

    

  }

  useEffect (() =>{

    generatetopAlbumsData (); 

  },[])
  return (
    <div >
    <Navbar />
    <HeroSection />
    {
      topAlbumsData.map((item) => {
        return (
          <Card data={item} type="album" />
        )
      })
    }
        
    </div>
  );
}

export default App;



