import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal, { Conatiner } from './styles'

import store from './store'
import Home from './pagesNew/Home/Home'
import Cadastro from './pagesNew/Cadastro/Cadastro'

//configurando caminhos do react router dom
const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Conatiner>
        <RouterProvider router={rotas} />
      </Conatiner>
    </Provider>
  )
}

export default App
