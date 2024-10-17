import React from 'react';
import './background.css'; // Make sure to create this CSS file

const Background = ({children}) => {
  return (
    <div className="backgroundStyle"> 
        {children}
        <div className='logoContainer'>
            <div className='logoStyles'></div>
        </div>
        
    </div>
  );
};

export default Background;