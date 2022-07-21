import React from 'react';

const OpBtn = ({ firstNum, setFirstNum, secondNum, setSecondNum, setInputText, inputText, operator, setOperator, setPrev, prev, show }) => {
    const btnPlus = () => {
        if (inputText > 0) {
            if (firstNum > 0) {
                submitBtn()
            } else if (firstNum <= 0) {
                setFirstNum(inputText);
                setOperator('+');
                setInputText('')
            }
        }
    }
    const btnMinus = () => {
        if (inputText > 0) {
            if (firstNum > 0) {
                submitBtn()
            } else if (firstNum <= 0) {
                setFirstNum(inputText);
                setOperator('-');
                setInputText('')
            }
        }
    }

    const btnTimes = () => {
        if (inputText > 0) {
            if (firstNum > 0) {
                submitBtn()
            } else if (firstNum <= 0) {
                setFirstNum(inputText);
                setOperator('x');
                setInputText('')
            }
        }
    }

    const btnDiv = () => {
        if (inputText > 0) {
            if (firstNum > 0) {
                submitBtn()
            } else if (firstNum <= 0) {
                setFirstNum(inputText);
                setOperator('÷');
                setInputText('')
            }
        }
    }

    const btnSQRT = () => {
        if (inputText > 0) {
            let eq = Math.sqrt(inputText);
            setPrev([
                ...prev, {
                    id: (Math.random()+ Math.random() + Math.random()).toFixed(3),
                    operation: `Square Root of ${inputText.toFixed(2)}`,
                    result: eq
                }
            ]);
            setInputText(eq)
        }
    }

    const btnRound = () => {
        if (inputText > 0) {
            let eq = Math.round(inputText);
            setPrev([
                ...prev, {
                    id: (Math.random()+ Math.random() + Math.random()).toFixed(3),
                    operation: `Round (${inputText})`,
                    result: eq
                }
            ]);
            setInputText(eq)
        }
    }

    const btnLog = () => {
        if (inputText > 0) {
            let eq = Math.log(inputText);
            setPrev([
                ...prev, {
                    id: (Math.random()+ Math.random() + Math.random()).toFixed(3),
                    operation: `Log of ${inputText.toFixed(2)}`,
                    result: eq
                }
            ]);
            setInputText(eq)
        }
    }

    const btnPi = () => {
        setPrev([
            ...prev, {
                id: (Math.random()+ Math.random() + Math.random()).toFixed(3),
                operation: `Pi`,
                result: (Math.PI).toFixed(5)
            }
        ]);
        setInputText((Math.PI).toFixed(5))
    }

    const btnToPower = () => {
        if (inputText > 0) {
            if (firstNum > 0) {
                submitBtn()
            } else if (firstNum <= 0) {
                setFirstNum(inputText);
                setOperator('^');
                setInputText('')
            }
        }
    }

    const submitBtn = () => {
        if (firstNum > 0) {
            if (inputText > 0) {
                switch (operator) {
                    case '+':
                        let sumAdd = parseFloat(firstNum) + parseFloat(inputText);
                        setPrev([
                            ...prev, {
                                id: (Math.random() + Math.random() + Math.random()).toFixed(3),
                                operation: `${firstNum} ${operator} ${inputText}`,
                                result: sumAdd
                            }
                        ]);
                        setInputText(sumAdd);
                        break;
                    case '-':
                        let sumW = parseFloat(firstNum) - parseFloat(inputText);
                        setPrev([
                            ...prev, {
                                id: (Math.random() + Math.random() + Math.random()).toFixed(3),
                                operation: `${firstNum} ${operator} ${inputText}`,
                                result: sumW
                            }
                        ]);
                        setInputText(sumW);
                        break;
                    case 'x':
                        let sums = parseFloat(firstNum) * parseFloat(inputText);
                        setPrev([
                            ...prev, {
                                id: (Math.random() + Math.random() + Math.random()).toFixed(3),
                                operation: `${firstNum} ${operator} ${inputText}`,
                                result: sums
                            }
                        ]);
                        setInputText(sums);
                        break;
                    case '÷':
                        let suma = parseFloat(firstNum) / parseFloat(inputText);
                        setPrev([
                            ...prev, {
                                id: (Math.random() + Math.random() + Math.random()).toFixed(3),
                                operation: `${firstNum} ${operator} ${inputText}`,
                                result: suma
                            }
                        ]);
                        setInputText(suma);
                        break;
                    case '^':
                        let sumT = (Math.pow(parseFloat(firstNum), parseFloat(inputText)));
                        setPrev([
                            ...prev, {
                                id: (Math.random() + Math.random() + Math.random()).toFixed(3),
                                operation: `${firstNum} ${operator} ${inputText}`,
                                result: sumT
                            }
                        ]);
                        setInputText(sumT);
                        break;
                    default:
                        setInputText('Boss!');
                        setPrev([
                            ...prev, {
                                id: (Math.random() + Math.random() + Math.random()).toFixed(3),
                                operation: `Error!`
                            }
                        ]);
                        break;
                }

                setFirstNum('');
                setSecondNum('');
                setOperator('');
            }

        } else if (parseInt(inputText < 1)) {
            setInputText('');
        }
    }


    const btnDel = () => {
        let newInput = '';
        try {
            newInput = (inputText.toString()).slice(0, -1);
        } catch (error) {
            console.log(error.message)
        }
        if (newInput.length > 0) {
            setInputText(newInput);
        } else {
            setInputText(0);
        }
    }
    const btnCls = () => {
        setFirstNum('');
        setSecondNum('');
        setOperator('');
        setInputText('0');
    }
    return (
        <div className='btns'>
            <div className="nomBtn text-light btn-outline-primary" style={{ fontSize: '2.2rem'  }} onClick={btnDiv}>÷</div>
            <div className="nomBtn text-light btn-outline-primary" style={{ fontSize: '2.2rem'  }} onClick={btnTimes}>×</div>
            <div className="nombtn text-light btn btn-outline-primary" style={{ fontSize: '2.2rem'  }} onClick={btnMinus}>-</div>
            <div className="nomBtn btn-outline-primary" style={{ fontSize: '2.2rem'  }} onClick={btnToPower}>^</div>
            <div className="nomBtn text-light btn-outline-primary" style={{ fontSize: '2.2rem'  }} onClick={btnPlus}>+</div>
            <div className="nomBtn btn-outline-warning" style={{ fontSize: '2.2rem',  display: `${show ? "" : "none"}` }} onClick={btnPi}>Pi</div>
            <div className="nomBtn btn-outline-primary p-2" style={{ fontSize: '1.5rem', display: `${show ? "" : "none"}`  }} onClick={btnRound}>Round</div>
            <div className="nomBtn text-light btn-outline-primary p-2" style={{ fontSize: '1.5rem', display: `${show ? "" : "none"}`   }} onClick={btnLog}>Log</div>
            <div className="nomBtn btn-outline-warning p-2" style={{ fontSize: `${show ? "1.5rem" : '2.2rem'}`, }} onClick={btnSQRT}>SQRT</div>
            <div className="nomBtn btn-primary" style={{ fontSize: '1.5rem'  }} onClick={submitBtn}>=</div>
            <div className="nomBtn btn-outline-danger" style={{ fontSize: '1.5rem'  }} onClick={btnDel}>Del</div>
            <div className="nomBtn btn-danger" style={{ fontSize: '1.5rem'  }} onClick={btnCls}>Clear</div>
        </div>
    );
}

export default OpBtn;