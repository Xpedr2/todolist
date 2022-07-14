import { BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './components/login/login';
import Register from './components/login/Register';
import NavBarr from './components/nav/nav';
import Home from "./components/HomePage/Home";
import NotFoundPage from "./components/NotFoundPage";
import RecoveryAccount from "./components/login/Recovery";
import { AuthProvaider } from "./components/context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoutes";
import Board from "./components/todoapp/Board";



function App() {
  return (
  <>

    <AuthProvaider>
      <BrowserRouter>
        <NavBarr/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/RecoveryAccount' element={<RecoveryAccount/>}/>
          <Route path='/board' element={
            <ProtectedRoute>
              <Board/>      
            </ProtectedRoute>
          }/>
          <Route path='/resetPass' element={<NotFoundPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvaider>
    
  
  </>
  );
  
}

export default App;
