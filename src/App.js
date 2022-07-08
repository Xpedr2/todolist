import { BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './components/login/login';
import Register from './components/login/Register';
import NavBarr from './components/nav/nav';
import TodoApp from './components/todoapp/todoApp';
import Home from "./components/HomePage/Home";
import NotFoundPage from "./components/NotFoundPage";
import RecoveryAccount from "./components/login/Recovery";


function App() {
  return (
  <>
    <BrowserRouter>
      <NavBarr/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
        <Route path='/RecoveryAccount' element={<RecoveryAccount/>}/>
      </Routes>
    </BrowserRouter>
    
  
  </>
  );
  
}

export default App;
