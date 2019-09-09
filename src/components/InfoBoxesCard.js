import React,{Component} from 'react';
import './InfoBoxesCard.css'
import { withTranslation, Trans } from 'react-i18next';
import { tsConstructorType } from '@babel/types';

 class InfoBoxesCard extends Component{
   
     render(){
      
        const { t, i18n } = this.props;
   
        const changeLanguage = (lng) => {
          i18n.changeLanguage(lng);
        }
         return(
             <div className="OnePerson">
                <img src={this.props.avatar}></img>
                <h5>{this.props.name}</h5>
                <Trans>  <h3>{this.props.title}</h3></Trans>
                <Trans> <p>{this.props.description}</p></Trans>
                <Trans>  <button>{this.props.proffesion}</button></Trans>
             </div>
         );
     }
 }

 export default withTranslation('translations')(InfoBoxesCard);