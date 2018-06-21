import React, {Component} from 'react';

import ProjectInfoCard from './ProjectInfoCard';

export default class SubCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ isClicked: !this.state.isClicked })
  }
  render() {
    const { projects, experience, education } = this.props;
    return (
      <div className = 'ui raised segment' onClick = {this.handleClick}>
        <h1>Projects</h1>
        { this.state.isClicked &&
          <div className='subCardContainer'>
            { projects && projects.map(project => <ProjectInfoCard key={project.id} project={project} /> ) }
          </div>
        }
      </div>
    )
  }
}
