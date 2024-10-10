import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { BotaoSalvar } from '../../styles'

import * as enums from '../../Util/enums/tarefa'
import { remover, editar } from '../../store/Reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

//dizendo que o type é do mesmo tipo que a class tarefa
type Props = TarefaClass

const Tarefa = ({
  descricao: descricaoOriginal,
  Prioridade,
  titulo,
  status,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={Prioridade}>
        {Prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        //tecnica nova para manipular um estado, so permite que posso mecher no input quando o state for false
        disabled={!estaEditando}
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricao, //passando os valores para o modificador state editar
                    Prioridade,
                    titulo,
                    status,
                    id
                  })
                )
                //após clicar em salvar cancela a edicao
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover
              onClick={() => {
                cancelarEdicao()
              }}
            >
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
