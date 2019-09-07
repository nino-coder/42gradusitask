import React,{Component} from 'react';
import './Header.css'

class Header extends Component{
    render(){
        return(
            <div className="MainContainerHeader">
                <div></div>
                <div className="Buttons">
                <button className="SelectLanguage">ქარ</button>
                <button className="SelectLanguage">ENG</button>
                <button className="MyProfile" >ჩემი პროფილი</button>
                <img  className="Search" src={require("../assets/search.svg")}/>
                <div  className="BurgerMenuContainer">
                <img className="BurgerMenu"src={require("../assets/burger menu.svg")}/>
                </div>
                </div>
            </div>
        )
    }
}
export default Header;