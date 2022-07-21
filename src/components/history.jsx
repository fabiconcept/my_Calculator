import React from 'react'

const History = ({prev, setInputText}) => {
    const setVal = e =>{
        setInputText(e.target.innerHTML)
    }
    return (
        <div className="history" id='history'>
            {prev.length > 0 ? prev.map(item => (
                <li key={item.id}>
                    <span>{item.operation} :</span>
                    <span onClick={setVal}>{item.result}</span>
                </li>
            )) : <div className='text-center m-2'>...No History...</div>}
        </div>
    )
}

export default History