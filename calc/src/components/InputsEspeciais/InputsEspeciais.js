import React from "react";
import styled from "styled-components";
import backspace from "../../img/backspace.svg"


const MainDiv = styled.div`
display: flex ;
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
margin-left: 2px;
width: 70px;
border: none;
border-radius: 3px;
`

class InputsEspeciais extends React.Component{
    state = {
    
    }

    render(){
        return <MainDiv>
            <DivOperacao value={"CE"} onClick={this.props.onclick}>CE</DivOperacao>
            <DivOperacao value={"C"} onClick={this.props.onclick}>C</DivOperacao>
            <DivOperacao value={"backspace"} onClick={this.props.onclick}><img src={backspace} alt='backspace' />  </DivOperacao>

        </MainDiv>
    }
}

export default InputsEspeciais