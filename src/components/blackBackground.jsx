import React, { Children } from 'react';
import './blackBackground.css'; // Make sure to create this CSS file

const BlackBackground = ({children}) => {
  return (
    <div className="blackBackgroundStyle">  
        <div className='content'>
            {children}
        </div>  
    </div>
  );
};

export default BlackBackground;