import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <>
    <MantineProvider>
      <BrowserRouter>
        <Navbar />
        <Dashboard /> 
      </BrowserRouter>
    </MantineProvider>
    </>
  )
}

export default App
