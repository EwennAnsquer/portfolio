import React from 'react'
import "./year.css"
import Project from "./../project/project"
import ExpPro from "./../exppro/exppro"

export default function Year({nbProject}) {

  const project = [];
  for (let i = 0; i < nbProject; i++) {
    project.push(<Project key={i} />);
  }

  return (
    <div className='year'>
        <h1>Year</h1>
        <div className="yContainer">
          <div className="pContainer">
            {project}
          </div>
          <ExpPro />
        </div>
      </div>
    )
}
