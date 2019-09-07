import React,{Component} from 'react';
import './About.css'
class About extends Component{
render(){
    return(
        <div className="MainContainerAbout">
        <div className="projects">
            <h2>პროექტები</h2>
        </div>
        <div className="About">
            <p>ჩვენი მიზანია აღმოვაჩინოთ და დავასაქმოთ რაც შეიძლება მეტი ადამიანი, გაზარდოთ კონკურენცია და მომსახურების ხარისხი,
                გავხადოთ ქართული ბაზარი მრავალფეროვანი და დავნერგოთ მისთვის ახალი ურთიერთობის ფორმა.
            </p>
        </div>
        <div className="TwoButton">
            <button className="SearchByCategory">ძიება კატეგორიების მიხედვით</button>
            <button className="OnGoingProjects">მიმდინარე პროექტები</button>
        </div>
    </div>
    );
}
}
export default About;