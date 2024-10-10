import styled from 'styled-components'
import variaveis from '../../variaveis'

import * as enums from '../../Util/enums/tarefa'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

//função para retornar cor de fundo dependendo da string do status
function retornaCorDeFundo(props: TagProps): string {
  //verifica se tem uma propriedade chamada status
  if (props.parametro === 'status') {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  } else {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    // eslint-disable-next-line prettier/prettier
    if (props.prioridade === enums.Prioridade.IMPORTANTE) return variaveis.amarelo2
  }
  //caso não seja nenhuma dos if
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-size: 12px;
  color: #fff;
  font-weigth: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

//uma função que recebe o botao (com componente que herda botao)
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
