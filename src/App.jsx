import Header from './components/Header'
import Main from './components/Main';
import Box from './components/Box'
import Register from './Register';
import { Route, Routes } from "react-router-dom"
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/signIn' element={<Register/>} />
      <Route path='/profile' element={<Profile/>} />
     </Routes>
    </div>
  );
}

export default App;
