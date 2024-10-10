import { MainContainer } from '../../../styles/index'
import { Campo } from '../../../styles/index'
import { Form, Opcoes, Opcao } from './styles'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar } from '../../../styles/index'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as enums from '../../../Util/enums/tarefa'
import Tarefa from '../../../models/Tarefa'
import { cadastrar } from '../../../store/Reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navegate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (e: FormEvent) => {
    e.preventDefault()

    //usando a instancia de tarefa feita para atenderc a os requisitos
    const tarefaParaAdicionar = new Tarefa(
      titulo,
      prioridade,
      enums.Status.PENDENTE,
      descricao,
      9
    )

    dispatch(cadastrar(tarefaParaAdicionar))
    navegate('/')
  }

  return (
    <MainContainer>
      <h1>Nova tarefa</h1>
      <Form onSubmit={cadastrarTarefa} action="">
        <Campo
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Titulo"
        />
        <Campo
          as="textarea"
          name=""
          id=""
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>

          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                type="radio"
                onChange={(e) =>
                  setPrioridade(e.target.value as enums.Prioridade)
                }
                name="prioridade"
                id={prioridade}
                //apenas quando a expresão em chave for true ele será marcado
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
