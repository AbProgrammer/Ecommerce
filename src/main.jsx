import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './Contexts/CartContext';
import { AuthProvider } from './Contexts/AuthContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    
    <AuthProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </AuthProvider>
    
  
)


