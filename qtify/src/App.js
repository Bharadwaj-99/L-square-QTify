import { useState, useEffect} from 'react';
import './App.css';

import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import { fetchTopAlbums,fetchNewAlbums ,fetchAllSongs} from './components/api/api';


import Section from './components/Section/Section';
import FilterTabs from './components/FilterTabs/FilterTabs';
import CustomAccordion from './components/Accordion/CustomAccordion';
import { accordionData } from './components/config/helper-config';
import Footer from './components/Footer/Footer';


function App() {
  const [topAlbumsData,setTopAlbumsData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [allSongsData, setAllSongsData] = useState([]);
  const [loadingState, ] = useState({
		topAlbum: true,
		newAlbum: true,
		allSongs: true,
	});

 

  const generatetopAlbumsData = async() => {
    
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);

    

  }

  const generateNewAlbumData = async () => {
		

			const data = await fetchNewAlbums();
			setNewAlbumData(data);

			
	};
  
  const generateAllSongsData= async () => {
		

    const data = await fetchAllSongs();

    // console.log("data",data);

    setAllSongsData(data);

    
};

  

  useEffect (() =>{

    generatetopAlbumsData (); 
    generateNewAlbumData();
    generateAllSongsData();
	

  },[])

 
  return (
    <div >
    <Navbar />
    <HeroSection />
    <div className='sectionWrapper'>
      <Section data={topAlbumsData} type="album" title="Top Albums" 	/>
      <Section data={newAlbumData} type="album" title="New Albums" 	/>
      
    </div>
    <hr className='line'></hr>
			<div className='filter_songs_wrapper'>
				<div>
					<h3 className='tabsTitle'>Songs</h3>
				</div>
				<FilterTabs data={allSongsData} loadingState={loadingState.allSongs} />
			</div>
        {/* {allSongsData|json} */}
      <hr className='line'></hr>
      <div className='customAccordionWrapper'>
				<h1 className='accordionHeader'>FAQs</h1>

				{accordionData?.length ? (
					accordionData.map((each, index) => {
						return <CustomAccordion key={index} data={each} />;
					})
				) : (
					<></>
				)}
			</div>
			<Footer />

   
    </div>

  );
}

export default App;



