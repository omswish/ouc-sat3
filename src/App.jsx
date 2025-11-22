import { useState } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
// import AboutUs from './components/pages/AboutUs'
// import ContactUs from './components/pages/ContactUs'
import Login from './components/pages/Login'

// Placeholder for Dashboard component
function Dashboard() {
  return <h2>Dashboard</h2>;
}

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <div>
     {
            (location.pathname === "/") && <Routes>
              <Route path='/' exact element={<Login/>} />
            </Routes>
          }
 
          {
            (location.pathname !== "/") && <>
              <div class="app">
                <Navigation/>
                <Routes>
                  <Route path='/dashboard' exact element={<Dashboard/>} />
                </Routes>
              </div>
            </>
          }
      </div>
    </>
  )
}

export default App
