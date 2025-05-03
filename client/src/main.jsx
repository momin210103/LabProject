
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from "react-router";
import Home from './components/Home.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element = {<App/>}>
      <Route index element = {<Home/>}/>
      <Route path="register" element = {<Register/>}/>
      <Route path="login" element = {<Login/>}/>
    </Route>

    </Routes>
  </BrowserRouter>
)
