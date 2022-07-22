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
  const [test, setTest] = useState([]);
  const [show, setShow]= useState(true)

  let proceed = false;


  useEffect(() => {
    setInputText('0');
    const winHeight = window.innerHeight;

    if (winHeight <=667) {
      setShow(false)
      const div = document.getElementById("app");
      scrollToBottom(div);
    }
    getFromLocal()
    proceed = true;
  }, []);

  useEffect(()=>{
    saveToLocal()
  }, [prev])

  useEffect(()=>{
    const div = document.getElementById("history");
    scrollToBottom(div);
  }, [prev]);


  const scrollToBottom = (div)=>{
    div.scrollTop = div.scrollHeight;
  }

  const saveToLocal = () =>{
    const localStore = localStorage;
    const data  = localStore.getItem("cal_history");
    setTimeout(() => {
      setTest(localStore.setItem("cal_history", JSON.stringify(prev)));
    }, 200);
  }

  const getFromLocal = () =>{
    const localStore = localStorage;
    const data  = localStore.getItem("cal_history");
    if(data === null){
      localStore.setItem("cal_history", JSON.stringify([]));
    }else{
      const res = JSON.parse(data);
      setPrev(res);
    }
  }
  

  return (
    <div className="app bg-dark" id='app'>
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
