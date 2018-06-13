import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjectInfoCard from './ProjectInfoCard';

function Card(props){
  const { heading, projects } = props;
  return (
    <div>
      <h3>{ heading }</h3>
      { projects && projects.map(project => <ProjectInfoCard project={project} /> ) }
    </div>
  )
}

const mapStateToProps = ({ projects }) => {
  return {
    projects
  };
};

export default connect(mapStateToProps, null)(Card);
