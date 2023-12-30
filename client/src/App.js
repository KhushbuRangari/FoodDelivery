
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route,useLocation} from 'react-router-dom'
import Homepage from './components/Pages/Homepage';
import PageNotFound from './components/Pages/PageNotFound';
import Login from './components/Pages/LoginPage';
import Signup from './components/Pages/Signup';
import Offcanvas from './components/Offcanvas';
import LoginPage from './components/Pages/LoginPage';
import SignupPage from './components/Pages/Signup';
import RequireAuth from "./components/RequireAuth";
import Cart from './components/Pages/Cart';
import { useAuthContext,AuthProvider } from './context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
//   const { login } = useAuthContext()
// // console.log(login);
//   const location = useLocation()
const notify = () => toast("Wow so easy!");
//   const pathName = location.state?.from || '/'
  return (
    <div className="App">
     
      <AuthProvider>
    
      <Navbar/>
      <Offcanvas/>
      <LoginPage/>
      <SignupPage/>

        <Routes>
          <Route path='/' element={<Homepage/>} ></Route>
       
          <Route path='/login' element={<Login></Login>}></Route>
          
               <Route path='/signup' element={<Signup/>}></Route>
              
          {/* <Route path='/cart' element={<RequireAuth><Cart/></RequireAuth>}></Route> */}
          <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
      <ToastContainer />
      </AuthProvider>
      
    </div>
  );
}

export default App;
