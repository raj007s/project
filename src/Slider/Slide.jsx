import React from 'react'
import Nsl from './Nsl';

import Nextsec from './Nextsec';
import Footer from '../Footer/Footer'

function Slide(prpos) {
  return (
    <>
    <div className="header">
    <Nsl/>
        {/* <Navbar className="fixed z-50"/> */}
    </div>
    <div className="sec">
        <Nextsec/>
    </div>
    <Footer ftext1={prpos.ftext1} ftext2={prpos.ftext2} ftext3={prpos.ftext3}/>
   
    </>
  )
}

export default Slide