import React from 'react'
import './styles.css';
import Cards from './Card';  
import Slider from './Slider';
import Head from './Head'

const MainPage = () => {

      return (
        <div>
          {/* <Header/> */}
          <Head/>
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

