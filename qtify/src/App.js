import './App.css';
import Card from './components/Card/Card';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div >
    <Navbar />
    <HeroSection />
    <Card
        
        title="100 Follows"
        description="New Bollywood"
      />
        
    </div>
  );
}

export default App;
