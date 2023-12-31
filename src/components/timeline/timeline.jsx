import React from 'react'
import './timeline.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function Timeline() {
  return (
    <div className='timeline' id='timeline'>
      <h2>TimeLine</h2>
      <VerticalTimeline lineColor='#000'>
        <VerticalTimelineElement 
        className='vertical-timeline-element--work truc' 
        iconStyle={{ background: '#000', boxShadow: 'none' }} 
        date='2010-2020'
        contentArrowStyle={{ borderRight: '7px solid #000' }}
        contentStyle={{backgroundColor: "#000", color: "#fff", boxShadow: "none"}}
        dateClassName={ "truc" }
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
