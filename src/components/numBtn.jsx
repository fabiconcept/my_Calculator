import React from 'react';

const NumBtn = ({inputText, setInputText}) =>{
    const bt1 = ()=>{
        let testNum = "";
        try {
            testNum = (inputText.toString()).split('.');
        } catch (error) {
            setInputText(error.message);
        }
        if (inputText > 0 || testNum.length === 2) {
            let num = inputText + "1";
            setInputText(num);
        }else{
            setInputText('1');
        }
    }
    const bt2 = ()=>{
        let testNum = "";
        try {
            testNum = (inputText.toString()).split('.');
        } catch (error) {
            setInputText(error.message);
        }
        if (inputText > 0 || testNum.length === 2) {
            let num = inputText + "2";
            setInputText(num);
        }else{
            setInputText('2');
        }
    }
    const bt3 = ()=>{
        let testNum = "";
        try {
            testNum = (inputText.toString()).split('.');
        } catch (error) {
            setInputText(error.message);
        }
        if (inputText > 0 || testNum.length === 2) {
            let num = inputText + "3";
            setInputText(num);
        }else{
            setInputText('3');
        }
    }
    const bt4 = ()=>{
        let testNum = "";
        try {
            testNum = (inputText.toString()).split('.');
        } catch (error) {
            setInputText(error.message);
        }
        if (inputText > 0 || testNum.length === 2) {
            let num = inputText + "4";
            setInputText(num);
        }else{
            setInputText('4');
        }
    }
    const bt5 = ()=>{
        let testNum = "";
        try {
            testNum = (inputText.toString()).split('.');
        } catch (error) {
            setInputText(error.message);
        }
        if (inputText > 0 || testNum.length === 2) {
            let num = inputText + "5";
            setInputText(num);
        }else{
            setInputText('5');
        }
    }
    const bt6 = ()=>{
        let testNum = "";
        try {
            testNum = (inputText.toString()).split('.');
        } catch (error) {
            setInputText(error.message);
        }
        if (inputText > 0 || testNum.length === 2) {
            let num = inputText + "6";
            setInputText(num);
        }else{
            setInputText('6');
        }
    }
    const bt7 = ()=>{
        let testNum = "";
        try {
            testNum = (inputText.toString()).split('.');
        } catch (error) {
            setInputText(error.message);
        }
        if (inputText > 0 || testNum.length === 2) {
            let num = inputText + "7";
            setInputText(num);
        }else{
            setInputText('7');
        }
    }
    const bt8 = ()=>{
        let testNum = "";
        try {
            testNum = (inputText.toString()).split('.');
        } catch (error) {
            setInputText(error.message);
        }
        if (inputText > 0 || testNum.length === 2) {
            let num = inputText + "8";
            setInputText(num);
        }else{
            setInputText('8');
        }
    }
    const bt9 = ()=>{
        let testNum = "";
        try {
            testNum = (inputText.toString()).split('.');
        } catch (error) {
            setInputText(error.message);
        }
        if (inputText > 0 || testNum.length === 2) {
            let num = inputText + "9";
            setInputText(num);
        }else{
            setInputText('9');
        }
    }
    const bt0 = ()=>{
        let testNum = "";
        try {
            testNum = (inputText.toString()).split('.');
        } catch (error) {
            setInputText(error.message);
        }
        if (inputText > 0 ) {
            let num = inputText + "0";
            setInputText(num);
        }else if( testNum.length === 2){
            let num = inputText + "0";
            setInputText(num);
        }else{
            setInputText('0');
        }
    }

    const bt00 = ()=>{
        let testNum = "";
        try {
            testNum = (inputText.toString()).split('.');
        } catch (error) {
            setInputText(error.message);
        }
        if (inputText > 0 ) {
            let num = inputText + "00";
            setInputText(num);
        }else if( testNum.length === 2){
            let num = inputText + "00";
            setInputText(num);
        }else{
            setInputText('00');
        }
    }
    
    const btDot = ()=>{
        let testNum = "";
        try {
            testNum = (inputText.toString()).split('.');
        } catch (error) {
            setInputText(error.message);
        }
        if (inputText > 0 || testNum.length === 2) {
            let num = inputText + ".";
            setInputText(num);
        }else{
            setInputText('0.');
        }
    }
    return(
        <div className="btns">
            <div onClick={bt7} className="nomBtn btn-outline-primary">7</div>
            <div onClick={bt8} className="nomBtn btn-outline-primary">8</div>
            <div onClick={bt9} className="nomBtn btn-outline-primary">9</div>
            <div onClick={bt4} className="nomBtn btn-outline-primary">4</div>
            <div onClick={bt5} className="nomBtn btn-outline-primary">5</div>
            <div onClick={bt6} className="nomBtn btn-outline-primary">6</div>
            <div onClick={bt1} className="nomBtn btn-outline-primary">1</div>
            <div onClick={bt2} className="nomBtn btn-outline-primary">2</div>
            <div onClick={bt3} className="nomBtn btn-outline-primary">3</div>
            <div onClick={bt0} className="nomBtn btn-outline-primary">0</div>
            <div onClick={bt00} className="nomBtn text-light btn-outline-primary">00</div>
            <div onClick={btDot} className="nomBtn  btn-outline-primary">.</div>
        </div>
    )
}

export default NumBtn;