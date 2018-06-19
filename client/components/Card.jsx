import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjectInfoCard from './ProjectInfoCard';
import ExperienceInfoCard from './ExperienceInfoCard';

function Card(props){
  const { heading, projects, experience } = props;
  return (
    <div>
      <h3 className='FieldHeader'>{ heading }</h3>
      <h5 className='SubHeader'>Projects</h5>
      { projects && projects.map(project => <ProjectInfoCard project={project} /> ) }
      <h5 className='SubHeader'>Experience</h5>
      { experience && experience.map(experience => <ExperienceInfoCard experience={experience} /> ) }
      <h5 className='SubHeader'>Education</h5>
    </div>
  )
}

export default Card;

// const mapStateToProps = ({ projects, experiences }) => {
//   return {
//     projects,
//     experiences
//   };
// };

// export default connect(mapStateToProps, null)(Card);
