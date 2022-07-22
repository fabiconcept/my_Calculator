import React from 'react'

const History = ({ prev, setInputText, setPrev }) => {
    const setVal = e => {
        setInputText(e.target.innerHTML)
    }

    const clearHistory =()=>{
        if (window.confirm("Are you sure you want to clear history?")) {
            setPrev([])
        }
    }

    return (
        <div className="main-history">
            <div className="del" onClick={clearHistory} style={{display: `${prev.length > 0 ? '' : 'none'}`}}>x</div>
            <div className="history" id='history'>

                {prev.length > 0 ? prev.map(item => (
                    <li key={item.id}>
                        <span>{item.operation} :</span>
                        <span onClick={setVal}>{item.result}</span>
                    </li>
                )) : <div className='text-center m-2'>...No History...</div>}
            </div>
        </div>
    )
}

export default History