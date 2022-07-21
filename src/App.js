import React, { useState, useEffect } from 'react';
import Form from './components/form';
import History from './components/history';
import NoNeed from './components/noNeed';
import NumBtn from './components/numBtn';
import OpBtn from './components/opBtn';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [firstNum, setFirstNum] = useState('');
  const [secondNum, setSecondNum] = useState('');
  const [operator, setOperator] = useState('');
  const [prev, setPrev] = useState([]);
  const [show, setShow]= useState(true)

  useEffect(() => {
    setInputText('0');
    const winHeight = window.innerHeight;

    if (winHeight <=667) {
      setShow(false)
    }
  }, [])

  useEffect(()=>{
    const div = document.getElementById("history");
    scrollToBottom(div);
  }, [prev])

  const scrollToBottom = (div)=>{
    div.scrollTop = div.scrollHeight;
  }

  return (
    <div className="app bg-dark">
      <NoNeed />
      <div className="calculator">
        <History 
          prev = {prev}
          setInputText={setInputText}
          setPrev = {setPrev}
        />
        <center>
          <div className="row">
            <Form
              inputText={inputText}
              setInputText={setInputText}
              firstNum={firstNum}
              operator={operator}
            />
            <div className="col-12 mt-2">
              <NumBtn
                inputText={inputText}
                setInputText={setInputText}
              />
            </div>
            <div className="col-12">
              <OpBtn
                firstNum={firstNum}
                setFirstNum={setFirstNum}
                secondNum={secondNum}
                setSecondNum={setSecondNum}
                inputText={inputText}
                show = {show}
                setInputText={setInputText}
                setOperator={setOperator}
                operator={operator}
                prev={prev}
                setPrev={setPrev}
              />
            </div>
          </div>
        </center>
      </div>
    </div>
  )
}

export default App;
