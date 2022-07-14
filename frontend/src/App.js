
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {EventContextProvider} from './context/EventContext';
import {UserContextProvider} from "./context/UserContext"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Profile from "./components/Profile"
import PrivateRoute from "./components/PrivateRoute"
import Home from "./components/Home"
import Navbar from './components/Navbar';
import EventDetails from './components/EventDetails';
import NotFoundPage from './components/NotFoundPage';



function App() {
  
  return (
    <EventContextProvider>
      <UserContextProvider>
           <BrowserRouter>
             <Navbar/>
              <Routes>
                <Route path="/">
                  <Route path="/" element={<Home />}/>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/register" element={<SignUp />}/>
                  <Route path="/profile" element={<PrivateRoute ><Profile/></PrivateRoute>}/>
                  <Route path="/events/:eventid" element={<EventDetails/>}/>
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
      </UserContextProvider>
    </EventContextProvider>
    
  );
}

export default App;
