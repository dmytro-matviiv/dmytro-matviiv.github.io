import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import Explanation from './Components/Explanation/Explanation';
import PriceList from './Components/PriceList/PriceList.';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div >
      <Navbar/> 
      <Explanation/>
      <Content/>
      <PriceList/>
      <Footer/>
    </div>
  );
}

export default App;
