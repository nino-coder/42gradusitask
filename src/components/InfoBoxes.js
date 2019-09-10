import React,{Component} from'react';
import info from '../components/data/info.json';
import './InfoBoxes.css';
import InfoBoxesCard from '../components/InfoBoxesCard';
class InfoBoxes extends Component{
    render(){
        return(
            <div className="MainContainerPerson">
                 {info.map(prop=> (
                    <InfoBoxesCard
                        avatar={prop.avatar}
                        name={prop.name}
                        description={prop.description}
                        title={prop.title}
                        proffesion={prop.proffesion}
                        color={prop.color}
                        />
                        ))}
            </div>    
        );
    }
}
export default InfoBoxes;