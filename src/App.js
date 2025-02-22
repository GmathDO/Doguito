import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Post from './pages/Post';
import Categoria from './pages/Categoria';
import Page404 from "./pages/Page404";



function App() {
  return ( 
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/posts/:id' element={<Post />} />
        <Route path='/categoria/:id/*' element={<Categoria />} />
        <Route path='*' element={<Page404 />}/>
      </Routes>
    </Router>
  );
}

export default App;