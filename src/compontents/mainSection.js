import { PatternOutlined } from '@mui/icons-material';
import React from 'react'
import thirdpic from '../images/Group61.png';
import onepic from '../images/Group62.png';
import LeftCard from './LeftSection';
import RightCard from './RightSection';
import pattern from '../images/pattern.png'

const mainSection = () => {
    return (
        <>
          <div className='head'>
              <div className='first-div' >
              <img src= {onepic} alt="my images" />
              <img src= {pattern} style={{top:'1775px'}}alt="my images" />
              </div>
              <div className='second-div'>
                <LeftCard/>
                <RightCard/>
                  
              </div>
              <div className='third-div'>
                  <img src= {thirdpic} alt="my images" />
              </div>
          </div>  
        </>
    )
}

export default mainSection;
