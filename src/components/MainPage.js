import React,{Component} from 'react';
import './mainpage.css';
import './fonts.css';
import Header from './Header';
import About from './About';
import InfoBoxes from './InfoBoxes';
class MainPage extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
         
            <div className="MainContainer">
                  <Header/>
                  <About/>
                  <InfoBoxes/>
                <div className="MainContainerFlutter">
                    <button>პროექტების არქივი</button>
                </div> 
            </div> 
        );
    }
}
export default MainPage;