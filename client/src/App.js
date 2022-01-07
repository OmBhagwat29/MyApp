import React, { createContext, useReducer } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './compoments/Header';
import Home from './compoments/Home';
import Login from './compoments/Login';
import Signup from './compoments/Signup';
import Campaign from './compoments/Campaign';
import Confirm from './compoments/Confirm';
import Footer from './compoments/Footer';
import Addcam from './compoments/Addcam';
import Errpage from './compoments/Errpage';
import Logout from './compoments/Logout';

import { initialState, reducer } from './reducer/userReducer';

export const UserContext = createContext();

function App() {

   const [state, dispatch] = useReducer(reducer, initialState);

  return (
   
   
      
    <div className="App">
    <UserContext.Provider value={{ state, dispatch}}>
    <Router>
    <Header/>
    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/campaign/:id" element={<Campaign />}/>
      <Route path="/confirm/:id" element={<Confirm />}/>
      <Route path="/addcam" element={<Addcam />}/>
      <Route path="/logout" element={<Logout />}/>
      <Route path='*'  element={<Errpage />} />
    </Routes>
    </Router>
    </UserContext.Provider>
    <Footer />
    </div>
    
  

  );
}

export default App;
