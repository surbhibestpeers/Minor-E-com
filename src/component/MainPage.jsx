import React,{useEffect} from 'react'
import './styles.css';
import Header from './Header';
import Cards from './Card';  
import Slider from './Slider';



const MainPage = () => {

      return (
        <div>
          <Header/>
          <div style={{paddingTop:'4.5rem'}}>
          <Slider/>
          </div> 
          <div style={{width:'100%'}}>
            <Cards/>
          </div>
          </div>
      );
    }; 
    export default MainPage;

