import {  VerticalTimelineElement, VerticalTimeline}  from 'react-vertical-timeline-component';
import React, {Component} from 'react'
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool, MdWork, MdLocalAirport } from "react-icons/md";
import Button from 'react-bootstrap/Button'




const TimelineEntry = (props) => {
    
   

    return (
         
        <VerticalTimelineElement
           className={props.entry.class}
           contentStyle={{ background: 'rgb(205, 221, 247)', color: '#000' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(205, 221, 247)' }}
           date={props.entry.date}
           iconStyle={props.entry.iconColor}
            icon={props.entry.icon}
           >
               <h3 className="vertical-timeline-element-title">{props.entry.title}</h3>
               <h5 className="vertical-timeline-element-subtitle">{props.entry.location}</h5>
               <p>
                   <div className="newline">{props.entry.description}</div>
               </p>
               <Button className="mt-2" variant="info">More Info</Button>
           </VerticalTimelineElement>
           
     );
  }


class Timeline extends Component {

   
 
    render() {
        const entry1 = {
            date: "August 2010 - May 2014",
            title: "Nease Highschool",
            location: "St. Augustine, FL",
            description: "I.B. Diploma\nGPA: 4.72\nSAT: 2010",
            icon: <MdSchool />,
            iconColor: { background: "rgb(237, 21, 21)", color: '#fff' },
            class: "vertical-timeline-element--education"
        }
        const entry2 = {
            date: "August 2014 - May 2019",
            title: "University of Florida",
            location: "Gainesville, FL",
            description: "Bachelor of Science in Industrial Engineering\nMinor: Computer Science\nGPA: 3.92\nGRE: 330",
            icon: <MdSchool />,
            iconColor: { background: "rgb(237, 21, 21)", color: '#fff' },
            class: "vertical-timeline-element--education"
        }
        const entry3 = {
            date: "August 2016 - December 2016",
            title: "GE Appliances",
            location: "Louisville, KY",
            description: "Supply Chain Intern",
            icon: <MdWork />,
            iconColor: { background: 'rgb(33, 150, 243)', color: '#fff' },
            class: "vertical-timeline-element--work"
        }
        const entry4 = {
            date: "May 2017 - August 2017",
            title: "Kraft Heinz",
            location: "San Diego, CA",
            description: "Operations Management Intern",
            icon: <MdWork />,
            iconColor: { background: 'rgb(33, 150, 243)', color: '#fff' },
            class: "vertical-timeline-element--work"
        }

        const entry5 = {
            date: "May 2018 - June 2018",
            title: "Backpacking Trip",
            location: "Western Europe",
            description: "U.K., Netherlands, France, Spain, Switzerland, Italy, Denmark",
            icon: <MdLocalAirport />,
            iconColor: { background: "rgb(63, 232, 21)", color: '#fff' },
            class: "vertical-timeline-element--travel"
        }

        const entry6 = {
            date: "June 2018 - August 2018",
            title: "Bank of America",
            location: "Charlotte, NC",
            description: "Global Technology Summer Analyst",
            icon: <MdWork />,
            iconColor: { background: 'rgb(33, 150, 243)', color: '#fff' },
            class: "vertical-timeline-element--work"
        }

        const entry7 = {
            date: "May 2019 - August 2019",
            title: "Backpacking Trip",
            location: "Southeast Asia",
            description: "Nepal, Indonesia, Thailand, Laos, Vietnam, Phillipines, Japan, Taiwan",
            icon: <MdLocalAirport />,
            iconColor: { background: "rgb(63, 232, 21)", color: '#fff' },
            class: "vertical-timeline-element--travel"
        }

        const entry8 = {
            date: "September 2019 - Present",
            title: "Deloitte",
            location: "Washington D.C.",
            description: "Business Technology Analyst",
            icon: <MdWork />,
            iconColor: { background: 'rgb(33, 150, 243)', color: '#fff' },
            class: "vertical-timeline-element--work"
        }

        return(
            <VerticalTimeline className="vertical-timeline-custom-line">
                <TimelineEntry entry={entry8} />
                <TimelineEntry entry={entry7} />
                <TimelineEntry entry={entry6} />
                <TimelineEntry entry={entry5} />
                <TimelineEntry entry={entry4} />
                <TimelineEntry entry={entry3} />
                <TimelineEntry entry={entry2} />
                <TimelineEntry entry={entry1} />
            </VerticalTimeline> 
        );
     
      }
  }
    
  export default Timeline;