import * as enums from '../Util/enums/tarefa'

class Tarefa {
  titulo: string
  Prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
  id: number

  constructor(
    titulo: string,
    Prioridade: enums.Prioridade,
    status: enums.Status,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.Prioridade = Prioridade
    this.status = status
    this.descricao = descricao
    this.id = id
  }
}

export default Tarefa
