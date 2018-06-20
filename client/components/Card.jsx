import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjectInfoCard from './ProjectInfoCard';
import ExperienceInfoCard from './ExperienceInfoCard';
import EducationInfoCard from './EducationInfoCard';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      isClicked: false,
    }
  }
  render(){
    const { heading, projects, experience, education } = this.props;
    return (
      <div className="column card" onClick={()=>this.setState({ isClicked:!this.state.isClicked })}>
        <div className="ui raised segment">
          <h3 className='header'>{ heading }</h3>
          { this.state.isClicked &&
            <div>
              <h5 className='SubHeader'>Projects</h5>
              { projects && projects.map(project => <ProjectInfoCard project={project} /> ) }
              <h5 className='SubHeader'>Experience</h5>
              { experience && experience.map(experience => <ExperienceInfoCard experience={experience} /> ) }
              <h5 className='SubHeader'>Education</h5>
              { education && education.map(education => <EducationInfoCard education={education} /> ) }
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Card;

// const mapStateToProps = ({ projects, experiences }) => {
//   return {
//     projects,
//     experiences
//   };
// };

// export default connect(mapStateToProps, null)(Card);
