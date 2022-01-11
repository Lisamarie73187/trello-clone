import React from 'react';

interface IButtonProps {
    handleClick: () => void
    text: string
}

const Button: React.FC<IButtonProps> = ({handleClick, text})=> { 

    return (
        <div 
            onClick={handleClick}
            className='add-button'
            >
                {text}
        </div>
    )
  };

  export default Button