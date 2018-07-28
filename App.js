import React, { Component } from 'react';
import Navigation from './navbar';
import Footer from './footer';
import Content from './content';



class App extends Component {
  render() { 
    return ( 
      <div>
      <div className="Header">
     <Navigation />
     </div>
    <Content/>
     
      <div className="Footer">
      <Footer />
  
      </div>
     </div>
     );
  }
}
 
export default App;