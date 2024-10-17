import React from 'react';
import './button.css'; // Ensure this file exists and is properly linked

const Button = ({props}) => {
    console.log('received props: ', props)
    if (props.variant == 'default'){
        if (props.state == 'enabled'){
            console.log('button not selected')
            return(
                <button className = 'button default enabled'>
                    <label>{props.label}</label>
                </button>
            );   
        }else if (props.state == 'selected'){
            console.log('button selected')
            return(
                <button className = 'button default selected'>
                    <label>{props.label}</label>
                </button>
            );
        }
    } else if (props.variant == 'dark'){
        if (props.state == 'enabled'){
            return (
                <button className='button dark enabled'>
                    <label>{props.label}</label>
                </button>
            );            
            }else if (props.state == 'selected'){
            return (
                <button className='button dark selected'>
                    <label>{props.label}</label>
                </button>
            );
            
        }
    }
  
};

export default Button;