import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjectInfoCard from './ProjectInfoCard';
import ExperienceInfoCard from './ExperienceInfoCard';
import EducationInfoCard from './EducationInfoCard';

import SubCard from './SubCard';

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
      <div className="column card" >
        <div className="ui raised segment">
          <div className='headerContainer'>
            <h3 className='header'>{ heading }</h3>
            <div className='expand' onClick={()=>this.setState({ isClicked:!this.state.isClicked })}><b>+</b></div>
          </div>
          { this.state.isClicked &&
            <div>
              { projects && <SubCard projects={projects}></SubCard> }
              <h5 className='SubHeader'>Experience</h5>
              { experience && experience.map(experience => <ExperienceInfoCard key={experience.id} experience={experience} /> ) }
              <h5 className='SubHeader'>Education</h5>
              { education && education.map(education => <EducationInfoCard key={education.id} education={education} /> ) }
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
