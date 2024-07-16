import { useState } from 'react'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<h1>Hello</h1>}></Route>
          <Route path="movie/:id" element={<h2>Movie id</h2>}></Route>
          <Route path="movie/:type" element={<h2>Movie type</h2>}></Route>
          <Route path="/" element={<h2>Error Page</h2>}></Route>                    
        </Routes>
      </Router>
      </div>
    </>
  )
}

export default App



// : is a dynamic  part yani ki user jo data lega uska alag alag data lega id hog aur type hoga
// one rout made for error page  to showing error it enter invalid data

// route is use to open or redirect to the new page by writing behind the end of homepage of website  like localhost:24435/movies    it showing us the movie homepage