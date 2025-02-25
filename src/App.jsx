import '@fontsource/gabriela'
import '@fontsource/mako'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Inicio from './pages/inicio'

function App() {

  return (
    <>
      <Header></Header>
      <Inicio></Inicio>
      <Footer></Footer>
    </>
  )
}

export default App
