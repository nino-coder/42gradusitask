import React,{Component} from 'react';
import './InfoBoxesCard.css'
import { withTranslation } from 'react-i18next';

 class InfoBoxesCard extends Component{
   
     render(){
      
         return(
             <div className="OnePerson">
                <img src={this.props.avatar}></img>
                <h5>{this.props.name}</h5>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <button style={{'background-color':this.props.color}}>{this.props.proffesion}</button>
             </div>
         );
     }
 }

 export default withTranslation('translations')(InfoBoxesCard);