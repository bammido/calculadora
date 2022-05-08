import React from "react";
import styled from 'styled-components'
import InputsEspeciais from "../InputsEspeciais/InputsEspeciais";
import InputsNumericos from "../InputsNumericos/InputsNumericos";
import InputsOperacoes from "../InputsOperacoes/InputsOperacoes";

const MainDiv = styled.div`
display:flex;
flex-direction: column;
justify-content: flex-end;
margin-top: 20px;


width: 300px;
height: 270px;
/* background-color: #2C2726; */
background-color: black;
padding: 2px;
`

const DivInputs = styled.div`
display:flex;
justify-content: center;
width: 100%;
`

const Tela = styled.div`
color: whitesmoke;
font-size: 2em;
display: flex;
flex-direction: column;
align-items: flex-end;
border: 1px solid white;
margin-bottom: 10px;
`

const DivNumerosMaisDIvEspeciais = styled.div`
display: flex;
flex-direction: column;
`

const ValorParaOperar = styled.div`
color: gray;
`

class Calculadora extends React.Component{
    state = {
        tela: 0,
        valorParaOperar: 0,
        operador: "",
        controle: 0,
        decimal: false

    }


// Lógica para botões relacionados ao valor numérico
onClickNumeros = (event)=>{


    // captura o value do botão pressionado
    let evento = event.target.value
    
    let numeroParaMostrarNaTEla = 0

    // se o botão for o de inverter, ele multiplicará o valor por -1
    if(evento==="inverte"){
        numeroParaMostrarNaTEla = Number(`${this.state.tela}`) * -1
        this.setState({tela: numeroParaMostrarNaTEla})
    }
    // caso seja o botão de decimal
    else if(evento ==="decimal"){
        // se o número da tela não for decimal será convertido em um
        if(!this.state.decimal){
            numeroParaMostrarNaTEla = `${this.state.tela}.`
            this.setState({tela: numeroParaMostrarNaTEla, decimal: !this.state.decimal})
        }
        /* se o número da tela for decimal sem o usuário ter digitado os números das casas 
        decimais o número volta a ser inteiro, caso contrario não acontecerá nada*/
        else if(Number.isInteger(Number(this.state.tela))){
            numeroParaMostrarNaTEla = Number(`${this.state.tela}`)
            this.setState({tela: numeroParaMostrarNaTEla, decimal: !this.state.decimal})
        }
    }
    // adiciona casas no número da tela
    else{
        if(`${this.state.tela}`.length < 15){
            evento = Number(evento)
            numeroParaMostrarNaTEla = Number(`${this.state.tela}${evento}`) 
            this.state.tela === 0 ? this.setState({tela: evento}) : this.setState({tela: numeroParaMostrarNaTEla})
        }
    }

}


// Lógica das operações
onClickOperacoes = (event)=>{

    let valorParaOperar;
    const evento = event.target.value==="=" ? "" : event.target.value
    const operador = this.state.operador
    
    // Se for a primeira entrada de valor
    if(this.state.valorParaOperar===0){
        valorParaOperar= this.state.tela
    }
    // se for igual mostrará o resultado
    else if(operador === ""){ 
        valorParaOperar = this.state.valorParaOperar
    }
    //  se for um operador mostrará o resultado mais o sinal de operaçao para continuar calculando
    else{
        if(operador === "+"){
            valorParaOperar =this.state.valorParaOperar !== 0 ? this.state.valorParaOperar + this.state.tela : this.state.tela
        } else if (operador === "-"){
            valorParaOperar =this.state.valorParaOperar !== 0 ? this.state.valorParaOperar - this.state.tela : this.state.tela
        } else if (operador === "*"){
            valorParaOperar =this.state.valorParaOperar !== 0 ? this.state.valorParaOperar * this.state.tela : this.state.tela
        } else if (operador === "/"){
            valorParaOperar =this.state.valorParaOperar !== 0 ? this.state.valorParaOperar / this.state.tela : this.state.tela
        } 
    }
    
    (this.state.tela === 0 && this.state.valorParaOperar===0) || this.setState({valorParaOperar: valorParaOperar, tela: 0, operador: evento})
}

    onClickEspeciais = (event)=>{
        const evento = event.target.value

        // apaga todos os valores
        if(evento=== "CE"){
            this.setState({tela: 0, valorParaOperar: 0})
        }
        // apaga somente a tela
        else if(evento=== "C"){
            this.setState({tela: 0})
        }
        // apaga o último dígito
        else{
            let telaNumeros = ''
            let telaNumerosArray = `${this.state.tela}`.split("")
            telaNumerosArray.pop()
            telaNumeros = Number(telaNumerosArray.join(""))
            this.setState({tela: telaNumeros})
        }
    }
    render(){


        const valorParaOperar = <ValorParaOperar>
            {this.state.operador === "=" ? this.state.valorParaOperar : this.state.valorParaOperar + this.state.operador}
        </ValorParaOperar>
        return <MainDiv>
            <Tela>
                {/* valorParaOperar do state */}
                {this.state.valorParaOperar!==0 && valorParaOperar }
                {/* valor digitado na tela */}
                {this.state.tela}
                </Tela>
            <DivInputs>
                <DivNumerosMaisDIvEspeciais>
                    <InputsEspeciais onclick={this.onClickEspeciais}/>
                    <InputsNumericos onclick={this.onClickNumeros} />
                </DivNumerosMaisDIvEspeciais> 
                <InputsOperacoes onclick={this.onClickOperacoes}/>
            </DivInputs>
         </MainDiv>
    }
}

export default Calculadora