import React, { Children } from 'react';
import './blurContainer.css'; // Make sure to create this CSS file
import ExperienceContainer from './experienceContainer';

const BlurContainer = (props) => {
  return (
    <div className="blurContainerStyle">  
        
        {children}
        
    </div>  
  );
};

export default BlurContainer;