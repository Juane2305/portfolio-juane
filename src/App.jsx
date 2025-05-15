import React from 'react';
import Home from './Views/Home/Home';
import WhatsappButton from './Components/WhatsappButton/WhatsappButton';


const App = () => {
  return (
    <div className='overflow-hidden'>
      <Home/>
      <WhatsappButton/>
    </div>
  );
};

export default App;