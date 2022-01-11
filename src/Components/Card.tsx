import React, {useState} from 'react';
import { GrClose } from 'react-icons/gr';
import Button from '../ComponentsUI/Button';
import InputBox from '../ComponentsUI/InputBox';
import List from './List';

interface ICardProps {

}

const Card: React.FC<ICardProps> = ()=> { 
    const [inputValue, setInputValue] = useState('')
    const [isNewListAdded, setIsNewListAdded] = useState(false)
    const [listArr, setListArr] = useState<string[]>([])

    const addToList = () => {
        setListArr([...listArr, inputValue])
        setIsNewListAdded(false)
        setInputValue('')
    }

    return (
        <div className='card-container'>
            <div>
                <div className='list-container'>
                    {listArr.map(e => {
                        return (
                            <List listTitle={e}/>
                        )
                    })}
                </div>
            </div>
            <div>
                <div className='add-list-container'>
                    {isNewListAdded &&
                        <div>
                            <InputBox 
                                inputValue={inputValue}
                                handleInputValue={setInputValue}
                                placeHolder='Enter Title'
                            />
                            <div className='add-wrapper'>
                                <Button
                                    handleClick={addToList}
                                    text='Add'
                                />
                                <div onClick={() => setIsNewListAdded(false)}><GrClose/></div>
                            </div>
                        </div>
                    }
                    {!isNewListAdded &&
                        <div>
                            <div 
                                onClick={() => setIsNewListAdded(true)}
                                className='add-list'
                            >
                                + Add List
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
  };

  export default Card