import React from "react";
import styled from "styled-components";
import backspace from "../../img/backspace.svg"


const MainDiv = styled.div`
display: flex ;
flex-direction: column;
`

const DivOperacao = styled.button`
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

class InputsOperacoes extends React.Component{
    state = {
        teclas: ['*', '/', '+', '-', '=']
    }

    render(){

        const teclasMap = this.state.teclas.map((tecla, i)=>{
            return <DivOperacao value={tecla} onClick={this.props.onclick} key={i} >{tecla}</DivOperacao>
        })

        return <MainDiv>

            {teclasMap}
            

        </MainDiv>
    }
}

export default InputsOperacoes