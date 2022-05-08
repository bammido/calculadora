import React from "react";
import styled from "styled-components";


const MainDiv = styled.div`
display: flex ;
width: 120px;
flex-wrap: wrap;
`

const DivNumero = styled.button`
width: 30px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
color: whitesmoke;
background-color: #373433;
margin: 5px;
border: none;
border-radius: 3px;
`

class InputsNumericos extends React.Component{
    state = {
        teclas: [7, 8, 9, 4, 5, 6, 1, 2,3,'+/-', 0, "."],
        teclasUltimalinha: []
    }
    
    render(){

        const teclasMap = this.state.teclas.map((tecla,i)=>{
            if(typeof(tecla)=== "number"){
                return <DivNumero value={tecla} onClick={this.props.onclick} key={i}>{tecla}</DivNumero>
            }else if(tecla ==='+/-' ){
                return <DivNumero value={"inverte"} onClick={this.props.onclick} key={i}>{tecla}</DivNumero>
            }else{return <DivNumero value={"decimal"} onClick={this.props.onclick} key={i}>{tecla}</DivNumero>}
        }) 

        return <MainDiv>
            {teclasMap}
        </MainDiv>
    }
    
}

export default InputsNumericos

// #2C2726 preto fundo
// #373433 preto div