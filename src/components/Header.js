import React,{Component} from 'react';
import './Header.css'
import { withTranslation, Trans } from 'react-i18next';
class Header extends Component{
   
       
    render(){
        const { t, i18n } = this.props;
   
        const changeLanguage = (lng) => {
          i18n.changeLanguage(lng);
        }
        return(
            <div className="MainContainerHeader">
                <div>
                    
                </div>
                <div className="Buttons">
                <button className="SelectLanguage" 
                onClick={() => changeLanguage('ge')}>ქარ</button>
                <button className="SelectLanguage"
                onClick={() => changeLanguage('en')}>ENG</button>
                <button className="MyProfile"  style={{'background-color':'#921892'}} ><Trans>ჩემი პროფილი</Trans> </button>
               <button><img  className="Search" src={require("../assets/search.svg")}/></button> 
                <button style={{'background-color':'#f36f3f'}}><img className="BurgerMenu"src={require("../assets/burger menu.svg")}/></button> 
                </div>
            </div>
        )
    }
}
export default withTranslation('translations')(Header);