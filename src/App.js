import React from 'react';
import CustomNavbar from './component/CustomNavbar';
import Home from './component/Home';
import Service from './component/Service';
function App() {
  return (
    <div className="App">
    <CustomNavbar/>
      <Home/>
      <Service/>
    </div>
  );
}

export default App;
