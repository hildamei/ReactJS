import React,{Component} from 'react';
import './App.css';
import Maps from './Components/Maps';
import Bookings from './Components/Bookings';
import Forms from './Components/Forms';


class App extends Component{
  render(){
  return (
    
        
    <div >
      <nav className="navbar navbar-dark bg-info">
    <h2 style={{color:"Green"}}>CEISA 4.0 NLE</h2>
  </nav>
      <div className="row" style={{marginTop:"10px"}}>
        <div className="col-md-8 offset-md-2">
          <Bookings/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Maps/>
        </div>
        <Forms/>
      </div>
    </div>  
  );
  }
}

export default App;
