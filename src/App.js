import './App.css'
import Header from './Header.js'
import Home from './Home.js'
import Checkout from './Checkout.js'
// import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Header />
        <Routes>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
    </div>
  )
}

export default App
