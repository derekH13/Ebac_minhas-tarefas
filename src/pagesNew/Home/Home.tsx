import BotaoAdicionar from '../../Components/BotaoAdicionar/BotaoAdicionar'
import ListadeTarefas from '../../ListadeTarefas/ListadeTarefa'
import BarraLateral from '../../pages/barraLateral/barraLateral'

const Home = () => (
  <>
    <BarraLateral />
    <ListadeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
