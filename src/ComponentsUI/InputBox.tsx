import React from 'react';

interface IInputBoxProps {
    inputValue: string
    handleInputValue: (e: string) => void
    placeHolder: string
    onFocus?: () => void
}

const InputBox: React.FC<IInputBoxProps> = ({inputValue, handleInputValue, placeHolder, onFocus})=> { 

    return (
        <input
            value={inputValue}
            onChange={(e) => handleInputValue(e.target.value)}
            placeholder={placeHolder}
            onFocus={onFocus}
        />
    )
  };

  export default InputBox