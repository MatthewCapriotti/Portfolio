import {  VerticalTimelineElement, VerticalTimeline}  from 'react-vertical-timeline-component';
import React, {Component} from 'react'
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool, MdWork} from "react-icons/md";
import Button from 'react-bootstrap/Button'
import MyVerticallyCenteredModal from './TimelineDialog.js'
import neasePic1 from '../images/neasePic1.png'
import neasePic2 from '../images/neasePic2.jpeg'
import uf1 from '../images/uf1.jpg'
import ge1 from '../images/ge1.jpg'
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
            dialogText: "Matthew attended the University of Florida from 2014 to 2019 and graduated with a B.S. in Industrial and Systems Engineering.  He graduated with an overall GPA of 3.92 and also completed a minor in computer science where he achieved a 4.0 GPA.  During his time at UF, Matthew was involved in multiple student organizations including Theta Tau, a professional engineering fraternity, and Tau Beta Pi, a honors society. He held leadership positions in each of these organizations ranging from intramural sports chair to Benton Engineering Council representative. Additionally, Matthew placed in case study competitions while he was at UF, earning 2nd place in a Deloitte case competition and 1st place in Accenture's Case Competition. Lastly, Matthew is extremely passionate about gator sports making sure never to miss a home football game and was even able to venture to some away games during his time as a student.",
            pic1: uf1
        }
        const entry3 = {
            date: "August 2016 - December 2016",
            title: "GE Appliances",
            location: "Louisville, KY",
            description: "Supply Chain Intern\nKaizen | Six-sigma | Lean",
            icon: <MdWork />,
            iconColor: { background: 'rgb(33, 150, 243)', color: '#fff' },
            class: "vertical-timeline-element--work",
            dialogText: "In the fall of 2016 Matthew traveled up to Louisville, KY to begin a one semester co-op with GE Appliances as a Supply Chain Intern.  Matthew worked in the sourcing department at GEA and got his first taste of what working in corporate America is like.  Some of his major accomplishments during his time there include: identifying and pitching over $500K in cost-out opportunities, leading a team at a Kaizen event that resulted in over $2 million in cost saving oppotunities, leading a propane supplier transition.",
            pic1: ge1
        }
        const entry4 = {
            date: "May 2017 - August 2017",
            title: "Kraft Heinz",
            location: "San Diego, CA",
            description: "Operations Management Intern\nSAP | Lean",
            icon: <MdWork />,
            iconColor: { background: 'rgb(33, 150, 243)', color: '#fff' },
            class: "vertical-timeline-element--work",
            dialogText: "Matthew made his way out west in 2017 for a summer internship with Kraft Heinz. The summer started off with a road trip from Florida to California, making stops at numerous national parks along the way. Eventually Matthew arrived in San Diego where he started his internship at a Kraft Heinz factory that produced taquitos and was located about a mile from the Mexican border. Most of the factory workers made the trip across the border everyday and Matthew really enjoyed working with these dedicated individuals. The language barrier prooved challenging at times but Matthew was still able to achieve multiple accomplishments during his summer with Kraft Heinz including: leading a project that led to $50K in savings and improved first hour efficiecy by 10%, analyzing and improving their SAP system, presenting findings to leadership in Chicago. Overall, this summer made Matthew fall in love with San Diego and he was able to learn a lot by working with people from a variety of different backgrounds. This summer also helped ignite Matthew's passion for traveling by letting him see many of the great sites out west. While in San Diego, Matthew was able to visit Los Angeles, Catalina, San Francisco, Tijuana, Yosemite, Big Bear, Mammoth Lakes, and Las Vegas. These amazing experiences far away from home helped give him the courage to pursue backpacking trips abroad in the following years.",
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
            dialogText: "For the summer before his 5th year at UF, Matthew traveled up the Charlotte, NC to do a summer technology internship with Bank of America. This internship was notably different than the previous two in that it was a technology role and it wasn't at a large manufacturing company.  Matthew's interest in finance and his desire to pursue a more technical route are the reasons for this switch. At Bank of America, worked to optimize a large-scale server patching process and he also optimized weekly excel tasks with VBA to save valuable resources.",
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
            description: "Business Technology Analyst\nAngular | Node.js | JavaScript | TypeScript | ASP.Net | C# | MySQL | SQL | GitHub | Visual Studio | TFS | cloud.gov | AWS | Python | Pandas",
            icon: <MdWork />,
            iconColor: { background: 'rgb(33, 150, 243)', color: '#fff' },
            class: "vertical-timeline-element--work",
            dialogText: "After graduation from UF in the spring of 2019 (and 4 month backpacking trip around south east Asia) Matthew moved up to Washington D.C. for this first full time postion as a Business Technology Analyst at Deloitte. Matthew got staffed on a project at the FDIC where he started to further develop his skills as a software engineer. In his first year on his project, Matthew mainly worked with existing web apps. Some of his accomplishments during this time included updating CI/CD pipelines and transitioning some web apps to updated servers, updating legacy code to fix bugs and implement requested user enhancements, and performing app-level security mitigations to ensure the compoliance with the rigorous government security standards. After his first year Matthew tranistioned to a different work stream within the FDIC account. In his new role Matthew is now doing modernization work and building web apps on cloud.gov using Angular, Node.js, and MySQL. Matthew has gotten to work with all levels of the development and has done numerous personal coding projects during this time to further bolster his knowledge and experience.",
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