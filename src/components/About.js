import React,{Component} from 'react';
import './About.css'
import { withTranslation, Trans } from 'react-i18next';

class About extends Component{
render(){
    const { t, i18n } = this.props;
   
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }
    return(
        <div className="MainContainerAbout">
        <div className="projects">
            <h2>{t('პროექტები')}</h2>
           <b><p>პროექტები</p></b> 
        </div>
        <div className="About">
            <p><Trans>ჩვენი მიზანია აღმოვაჩინოთ და დავასაქმოთ რაც შეიძლება მეტი ადამიანი, გაზარდოთ კონკურენცია და მომსახურების ხარისხი,
                გავხადოთ ქართული ბაზარი მრავალფეროვანი და დავნერგოთ მისთვის ახალი ურთიერთობის ფორმა.</Trans>
            </p>
        </div>
        <div className="TwoButton">
            <button className="SearchByCategory"><Trans>ძიება კატეგორიების მიხედვით</Trans></button>
            <button className="OnGoingProjects"><Trans>მიმდინარე პროექტები</Trans></button>
        </div>
    </div>
    );
}
}
export default withTranslation('translations')(About);