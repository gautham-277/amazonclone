import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {Homepage,Navbar, Products, SearchResults,Checkout} from "./components";

const App = () => {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route exact path='/' element={<Homepage/>}/>
    <Route exact path='/checkout' element={<Checkout/>}/>
    <Route exact path='/search' element={<SearchResults/>}/>
    <Route exact path='/products/:id' element={<Products/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App