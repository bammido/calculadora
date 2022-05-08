import logo from './logo.svg';
import './App.css';
import React from 'react'
import Calculadora from './components/Calculadora/Calculadora';
import styled from 'styled-components';


const MainDiv = styled.div`
width: 100vw;
height: 100vh;

background-color: whitesmoke;

display: flex;
justify-content: center;
`

class App extends React.Component{
  
  render(){
    return <MainDiv> <Calculadora/> </MainDiv>
  }
}

export default App;
