import { Routes,Route,BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Experience from './components/Experience'
import About from './components/About'
import Inbox from './components/Inbox'

function App() {
  const [toggleTheme,setToggleTheme] = useState("dark")

  function Toggle(theme){
    if(theme === "dark"){
      setToggleTheme("light")
    }
    else{
      setToggleTheme("dark")
    }
  }

 return (
  <div className={"App " + toggleTheme}>
      <BrowserRouter>
      <Navbar toggleTheme={toggleTheme} toggle={Toggle}/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/experience" element={<Experience/>}></Route>
        <Route path="/about" element={<About toggleTheme={toggleTheme}/>}></Route>
        <Route path="/inbox" element={<Inbox toggleTheme={toggleTheme}/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </div>
    
  )
}

export default App