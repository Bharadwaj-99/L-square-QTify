import { useState, useEffect} from 'react';
import './App.css';

import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import { fetchTopAlbums,fetchNewAlbums } from './components/api/api';

import Section from './components/Section/Section';

function App() {
  const [topAlbumsData,setTopAlbumsData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);

 

  const generatetopAlbumsData = async() => {
    
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);

    

  }

  const generateNewAlbumData = async () => {
		

			const data = await fetchNewAlbums();
			setNewAlbumData(data);

			
	};

  

  useEffect (() =>{

    generatetopAlbumsData (); 
    generateNewAlbumData();
	

  },[])
  return (
    <div >
    <Navbar />
    <HeroSection />
    
        
         <div>
      <Section data={topAlbumsData} type="album" title="Top Albums" 	/>
      <Section data={newAlbumData} type="album" title="New Albums" 	/>
      
    </div>
    </div>
  );
}

export default App;



