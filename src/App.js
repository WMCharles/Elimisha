import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './componets/Home';
import Scholarships from './componets/Scholarships';
import About from './componets/About';
import SignUp from './componets/SignUp';
import NavBar from './componets/NavBar/NavBar';

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' index element={<Home/>}/>
          <Route path='scholarships'  element={<Scholarships/>}/>
          <Route path='about'  element={<About/>}/>
          <Route path='signup'  element={<SignUp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
