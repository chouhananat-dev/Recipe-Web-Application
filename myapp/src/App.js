import './App.css';
import Description from './Description.js';
import About from './About.js'
import Contact from './Contact.js';
import Mainpage from './Mainpage.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Mainpage/>}></Route>
      <Route path='/description/:recipeId' element={<Description/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
