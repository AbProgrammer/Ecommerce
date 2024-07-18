import { useEffect, useState } from 'react'
import './App.css'
import HomePage from './Pages/HomePage'
import ShoppingCartPage from './Pages/ShoppingCartPage'
import SignInPage from './Pages/SignInPage'
import SignUpPage from './Pages/SignUpPage'
import ListProduct from './Pages/ListProduct';
import {BrowserRouter as Router, Routes,Route,Navigate} from "react-router-dom";
import { useAuth } from './Contexts/AuthContext'
import WelcomePage from './Pages/WelcomePage'

function App() {
const{authenticatedUser} = useAuth();

return (
    <>
    <Router>
      <Routes>
     
      <Route path = "/"  element = {<WelcomePage/>}/>
      <Route path = "/SignUpPage" element = {<SignUpPage/>}/>

      <Route path = "/SignOut" element = {<SignInPage/>}/>

     

      <Route path = "/Home"   element = {authenticatedUser? <HomePage/> : <Navigate to="/SignInPage"/>} />
       <Route path = "/SignInPage" element = {authenticatedUser? <HomePage/> : <SignInPage/> }/>
       
      <Route path = "/CartPage" element = {<ShoppingCartPage/>}/>
     
      </Routes>
     </Router>
    </>
  )
}

export default App
