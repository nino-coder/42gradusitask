import React,{Component} from 'react';
import './InfoBoxesCard.css'
 class InfoBoxesCard extends Component{
   
     render(){
         return(
             <div className="OnePerson">
                <img src={this.props.avatar}></img>
                <h5>{this.props.name}</h5>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <button>{this.props.proffesion}</button>
             </div>
         );
     }
 }

 export default InfoBoxesCard;