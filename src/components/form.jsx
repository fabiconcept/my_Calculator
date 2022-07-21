import React from 'react';

const Form = ({inputText, setInputText, firstNum, operator}) =>{
    const submitHandler = (e) =>{
        e.preventDefault();
    }

    const inputTextHandler = (e)=>{
        if(e.target.value > 0 || e.target.value === ""){
            setInputText(e.target.value);
        }
    }
    return(
        <div className="form">
            <form action="" className="form-group" onSubmit={submitHandler}>
                <div className="holder">
                    <label htmlFor="text" className='mb-3'>
                        {firstNum}
                    </label> 
                    <label className='' htmlFor="text">
                        {operator}
                    </label>
                </div>
                <input type="text" value={inputText} className="inText" disabled onChange={inputTextHandler} />
            </form>
        </div>
    )
}

export default Form;