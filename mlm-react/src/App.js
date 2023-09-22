import './App.css';
import {DataContext} from './DataContext'
import Login from './components/Login'
import Main from './components/Main'
import Header from './components/Header'
import Nav from './components/Nav'
import {Route, Routes} from 'react-router-dom'
import{useState, useEffect} from 'react'

function App() {
  const [user, setUser] = useState([])
  const [authenticated, setAuth] = useState('username')

  return (
    <DataContext.Provider
      value = {{
        user, setUser,
        authenticated, setAuth
      }}>  
      <div className="App">
        <main>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </main>
      </div>
    </DataContext.Provider>
  );
}

export default App;



