import React, {Component} from 'react';
import { connect } from 'react-redux';

import { getProjects } from '../store';

import Login from './Login';


class Home extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchProjects();
  }
  render(){
    const { projects } = this.props;
    return (
      <div>
        Home
        { projects &&
          projects.map(project => {
            return <h1 key={project.id}>{project.name}</h1>
          })
        }
      </div>
    )
  }
}

const mapStateToProps = ({ projects }) => {
  return {
    projects
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => {
      dispatch(getProjects());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
