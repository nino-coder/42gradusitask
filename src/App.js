import React,{Component} from 'react';
import MainPage from './components/MainPage'
import './components/mainpage.css'
import './App.css'
class App extends Component {
  render(){
  return (
    <div className="Background">
        <MainPage/>
        
      <img className="MediumCircle" src={require('./assets/1.png')}/>
      <img className="BigCircle" src={require('./assets/2.png')}/>
      <img className="BlueMediumCircle" src={require('./assets/3.png')}/>
      <img className="BlueSmallCircle" src={require('./assets/4.png')}/>
      <img className="PinkSmallCircle" src={require('./assets/5.png')}/>
   
   
    </div>
  );
}}
export default App;
