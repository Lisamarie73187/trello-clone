import React, {useState} from 'react';
import Button from '../ComponentsUI/Button';
import InputBox from '../ComponentsUI/InputBox';
import { GrClose } from 'react-icons/gr';


interface IListProps {
    listTitle: string
}

const List: React.FC<IListProps> = ({listTitle})=> { 
    const [inputValue, setInputValue] = useState('')
    const [showAddButton, setShowAddButton] = useState(false)
    const [listArr, setListArr] = useState<string[]>([])

    const addToList = () => {
        setListArr([...listArr, inputValue])
        setShowAddButton(false)
        setInputValue('')
    }

    return (
        <div>
            <div className='list-item'>
                <h2>
                    {listTitle}
                </h2>
                {listArr.map(e => {
                        return (
                            <div>{e}</div>
                        )
                    })}
                <div>
                    <InputBox 
                        inputValue={inputValue}
                        handleInputValue={setInputValue}
                        placeHolder='Add Item'
                        onFocus={() => setShowAddButton(true)}
                    />
                </div>
                {showAddButton &&
                    <div className='add-wrapper'>
                        <Button
                            handleClick={addToList}
                            text='Add'
                        />
                        <div onClick={() => setShowAddButton(false)}><GrClose/></div>
                    </div>
                }
            </div>
        </div>
    )
  };

  export default List