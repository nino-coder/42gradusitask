import React,{Component} from 'react';
import './mainpage.css';
import './fonts.css';
import Header from './Header';
import About from './About';
import InfoBoxes from './InfoBoxes';
import { withTranslation, Trans } from 'react-i18next';
class MainPage extends Component{
  
  
    render(){
        const { t, i18n } = this.props;
   
        const changeLanguage = (lng) => {
          i18n.changeLanguage(lng);
        }
        return(
         
            <div className="MainContainer">
                  <Header/>
                  <About/>
                  <InfoBoxes/>
                <div className="MainContainerFlutter">
                    <button><Trans>პროექტების არქივი</Trans></button>
                </div> 
            </div> 
        );
    }
}
export default withTranslation('translations') (MainPage);