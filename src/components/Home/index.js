import './index.css'
import NavigationBar from '../NavigationBar'
import LineGraph from '../LineGraph';
import Recharts from '../Recharts';

import CryptoCurrency from '../CryptoCurrency';
import { MdWavingHand } from "react-icons/md";

const Home=()=>(
    <div className="home-bg-container">
    <NavigationBar/>
    <div className='right-bg-container'>
        <div className='greeting-container'>
            <h1 className='greeting-heading'>Hello,<span className='name-span'>Chelluri GowriPriya </span></h1>
            <MdWavingHand  className='hand-wave-icon'/>
        </div>
        <p className='description'>Welcome to <span className='span-description'>Spot trading!</span></p>
        <div className='visuals-container'>
            <LineGraph/>
            <Recharts className="pie-chart"/>
        </div>
        <CryptoCurrency/>
        
            
        
    </div>
        
    
    </div>
)
export default Home