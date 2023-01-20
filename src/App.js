import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contacts from './routes/Contacts';
import { useEffect } from 'react';

function App() {

  function handleCallbackResponse(response) {
    
  }

  useEffect(() => {
    /* Globla Google */
    google.accounts.id.initialize({
      client_id: '',
      callback: handleCallbackResponse
    });
  }, []);

  return (
    <div className="App">

      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contacts />} />  
      </Routes>
  
    </div>
  );
}

export default App;
