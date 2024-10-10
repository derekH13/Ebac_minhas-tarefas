import styled, { createGlobalStyle } from 'styled-components'
import { Botao } from '../Components/Tarefa/styles'
import variaveis from '../variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: "Roboto", sans-serif;
list-style: none;
}
`

export const Conatiner = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0px 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
