import {  VerticalTimelineElement, VerticalTimeline}  from 'react-vertical-timeline-component';
import React, {Component} from 'react'
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool, MdWork} from "react-icons/md";
import Button from 'react-bootstrap/Button'
import MyVerticallyCenteredModal from './TimelineDialog.js'
import neasePic1 from '../images/neasePic1.png'
import neasePic2 from '../images/neasePic2.jpeg'
import uf1 from '../images/uf1.jpg'
import uf2 from '../images/uf2.jpg'
import ge1 from '../images/ge1.jpg'
import ge2 from '../images/ge2.jpg'
import KraftHeinz1 from '../images/KraftHeinz1.jpg'
import KraftHeinz2 from '../images/KraftHeinz2.jpg'
import boa from '../images/boa.jpg'
import deloitte1 from '../images/deloitte1.jpg'
import deloitte2 from '../images/deloitte2.jpg'




const TimelineEntry = (props) => {
    
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <> 
        <VerticalTimelineElement
           className={props.entry.class}
           contentStyle={{ background: '#ebeced', color: '#000' }}
           contentArrowStyle={{ borderRight: '7px solid  #ebeced' }}
           date={props.entry.date}
           iconStyle={props.entry.iconColor}
            icon={props.entry.icon}
           >
               <h3 className="vertical-timeline-element-title">{props.entry.title}</h3>
               <h5 className="vertical-timeline-element-subtitle">{props.entry.location}</h5>
               <p>
                   <div className="newline">{props.entry.description}</div>
               </p>
               <Button className="mt-2" variant="primary" onClick={() => setModalShow(true)}>More Info</Button>
           </VerticalTimelineElement>
           <MyVerticallyCenteredModal title={props.entry.title} text={props.entry.dialogText} pic1={props.entry.pic1} pic2={props.entry.pic2}
           show={modalShow}
           onHide={() => setModalShow(false)}
         />
         </>
     );
  }


class Timeline extends Component {

   
 
    render() {
        const entry1 = {
            date: "August 2010 - May 2014",
            title: "Nease High School",
            location: "St. Augustine, FL",
            description: "I.B. Diploma\nGPA: 4.72\nSAT: 2010",
            icon: <MdSchool />,
            iconColor: { background: "rgb(237, 21, 21)", color: '#fff' },
            class: "vertical-timeline-element--education",
            dialogText: "Matthew attended Allen D. Nease High School in St. Augustine, FL and graduated in 2014 with his I.B. Diploma.  At Nease, Matthew played basketball for the school and spent 3 years on varsity including 2 years as a starter. In 2013, Matthew helped lead the basketball team to a District Championship and an appearance in the Sweet 16 of the state tournament and was named to the all-conference team his senior year.  In addition to basketball, Matthew also particapted in track and was a member of the National Honors Society.  He was also a member of Link Crew, which is an organization that helps incoming freshmen adjust to life in high school. Matthew also really enjoyed volunteering in the community and gave 150+ hrs of his time to local causes including beach clean-ups and basketball camps. Finally, Matthew was able to graduate top 10 in his class as well as earning the highest bright futures honors and he enrolled at the University of Florida in 2014.",
            pic1: neasePic1,
            pic2: neasePic2
        }
        const entry2 = {
            date: "August 2014 - May 2019",
            title: "University of Florida",
            location: "Gainesville, FL",
            description: "Bachelor of Science in Industrial Engineering\nMinor: Computer Science\nGPA: 3.92\nGRE: 330",
            icon: <MdSchool />,
            iconColor: { background: "rgb(237, 21, 21)", color: '#fff' },
            class: "vertical-timeline-element--education",
            dialogText: "Matthew attended Allen D. Nease High School in St. Augustine, FL and graduated in 2014 with his I.B. Diploma.  At Nease, Matthew played basketball for the school and spent 3 years on varsity including 2 years as a starter. In 2013, Matthew helped lead the basketball team to a District Championship and an appearance in the Sweet 16 of the state tournament and was named to the all-conference team his senior year.  In addition to basketball, Matthew also particapted in track and was a member of the National Honors Society.  He was also a member of Link Crew, which is an organization that helps incoming freshmen adjust to life in high school. Matthew also really enjoyed volunteering in the community and gave 150+ hrs of his time to local causes including beach clean-ups and basketball camps. Finally, Matthew was able to graduate top 10 in his class as well as earning the highest bright futures honors and he enrolled at the University of Florida in 2014.",
            pic1: uf1,
            pic2: uf2
        }
        const entry3 = {
            date: "August 2016 - December 2016",
            title: "GE Appliances",
            location: "Louisville, KY",
            description: "Supply Chain Intern\nKaizen | Six-sigma | Lean",
            icon: <MdWork />,
            iconColor: { background: 'rgb(33, 150, 243)', color: '#fff' },
            class: "vertical-timeline-element--work",
            dialogText: "Matthew attended Allen D. Nease High School in St. Augustine, FL and graduated in 2014 with his I.B. Diploma.  At Nease, Matthew played basketball for the school and spent 3 years on varsity including 2 years as a starter. In 2013, Matthew helped lead the basketball team to a District Championship and an appearance in the Sweet 16 of the state tournament and was named to the all-conference team his senior year.  In addition to basketball, Matthew also particapted in track and was a member of the National Honors Society.  He was also a member of Link Crew, which is an organization that helps incoming freshmen adjust to life in high school. Matthew also really enjoyed volunteering in the community and gave 150+ hrs of his time to local causes including beach clean-ups and basketball camps. Finally, Matthew was able to graduate top 10 in his class as well as earning the highest bright futures honors and he enrolled at the University of Florida in 2014.",
            pic1: ge1,
            pic2: ge2
        }
        const entry4 = {
            date: "May 2017 - August 2017",
            title: "Kraft Heinz",
            location: "San Diego, CA",
            description: "Operations Management Intern\nSAP | Lean",
            icon: <MdWork />,
            iconColor: { background: 'rgb(33, 150, 243)', color: '#fff' },
            class: "vertical-timeline-element--work",
            dialogText: "Matthew attended Allen D. Nease High School in St. Augustine, FL and graduated in 2014 with his I.B. Diploma.  At Nease, Matthew played basketball for the school and spent 3 years on varsity including 2 years as a starter. In 2013, Matthew helped lead the basketball team to a District Championship and an appearance in the Sweet 16 of the state tournament and was named to the all-conference team his senior year.  In addition to basketball, Matthew also particapted in track and was a member of the National Honors Society.  He was also a member of Link Crew, which is an organization that helps incoming freshmen adjust to life in high school. Matthew also really enjoyed volunteering in the community and gave 150+ hrs of his time to local causes including beach clean-ups and basketball camps. Finally, Matthew was able to graduate top 10 in his class as well as earning the highest bright futures honors and he enrolled at the University of Florida in 2014.",
            pic1: KraftHeinz1,
            pic2: KraftHeinz2
        }
/*
        const entry5 = {
            date: "May 2018 - June 2018",
            title: "Backpacking Trip",
            location: "Western Europe",
            description: "U.K., Netherlands, France, Spain, Switzerland, Italy, Denmark",
            icon: <MdLocalAirport />,
            iconColor: { background: "rgb(63, 232, 21)", color: '#fff' },
            class: "vertical-timeline-element--travel"
        }
*/
        const entry6 = {
            date: "June 2018 - August 2018",
            title: "Bank of America",
            location: "Charlotte, NC",
            description: "Global Technology Summer Analyst\nVBA | VB.Net",
            icon: <MdWork />,
            iconColor: { background: 'rgb(33, 150, 243)', color: '#fff' },
            class: "vertical-timeline-element--work",
            dialogText: "Matthew attended Allen D. Nease High School in St. Augustine, FL and graduated in 2014 with his I.B. Diploma.  At Nease, Matthew played basketball for the school and spent 3 years on varsity including 2 years as a starter. In 2013, Matthew helped lead the basketball team to a District Championship and an appearance in the Sweet 16 of the state tournament and was named to the all-conference team his senior year.  In addition to basketball, Matthew also particapted in track and was a member of the National Honors Society.  He was also a member of Link Crew, which is an organization that helps incoming freshmen adjust to life in high school. Matthew also really enjoyed volunteering in the community and gave 150+ hrs of his time to local causes including beach clean-ups and basketball camps. Finally, Matthew was able to graduate top 10 in his class as well as earning the highest bright futures honors and he enrolled at the University of Florida in 2014.",
            pic1: boa
        }
            /*
        const entry7 = {
            date: "May 2019 - August 2019",
            title: "Backpacking Trip",
            location: "Southeast Asia",
            description: "Nepal, Indonesia, Thailand, Laos, Vietnam, Phillipines, Japan, Taiwan",
            icon: <MdLocalAirport />,
            iconColor: { background: "rgb(63, 232, 21)", color: '#fff' },
            class: "vertical-timeline-element--travel"
        }
*/
        const entry8 = {
            date: "September 2019 - Present",
            title: "Deloitte",
            location: "Washington D.C.",
            description: "Business Technology Analyst\nAngular | Node.js | JavaScript | TypeScript | ASP.Net | C# | MySQL | SQL | GitHub | Visual Studio | TFS | cloud.gov",
            icon: <MdWork />,
            iconColor: { background: 'rgb(33, 150, 243)', color: '#fff' },
            class: "vertical-timeline-element--work",
            dialogText: "Matthew attended Allen D. Nease High School in St. Augustine, FL and graduated in 2014 with his I.B. Diploma.  At Nease, Matthew played basketball for the school and spent 3 years on varsity including 2 years as a starter. In 2013, Matthew helped lead the basketball team to a District Championship and an appearance in the Sweet 16 of the state tournament and was named to the all-conference team his senior year.  In addition to basketball, Matthew also particapted in track and was a member of the National Honors Society.  He was also a member of Link Crew, which is an organization that helps incoming freshmen adjust to life in high school. Matthew also really enjoyed volunteering in the community and gave 150+ hrs of his time to local causes including beach clean-ups and basketball camps. Finally, Matthew was able to graduate top 10 in his class as well as earning the highest bright futures honors and he enrolled at the University of Florida in 2014.",
            pic1: deloitte1,
            pic2: deloitte2
        }


        return(
            <VerticalTimeline className="vertical-timeline-custom-line">
                <TimelineEntry entry={entry8} />
                {/* <TimelineEntry entry={entry7} /> */}
                <TimelineEntry entry={entry6} />
                {/* <TimelineEntry entry={entry5} /> */}
                <TimelineEntry entry={entry4} />
                <TimelineEntry entry={entry3} />
                <TimelineEntry entry={entry2} />
                <TimelineEntry entry={entry1} />
            </VerticalTimeline> 
        );
     
      }
  }
    
  export default Timeline;