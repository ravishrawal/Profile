import React, {Component} from 'react';
import { connect } from 'react-redux';

import { getProjects, getExperiences } from '../store';

import Card from './Card';


class Home extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchProjects()
    this.props.fetchExperiences()
  }
  render(){
    const { projects, experiences } = this.props;
    const filterArr = (arr, field) => arr.filter(el => el.field === field);
    return (
      <div>
        Home
        {
          <div>
            <Card heading='Mechanical Engineering' projects={filterArr(projects, 'ME')} experience={filterArr(experiences, 'ME')}/>
            <Card heading='Software Engineering' projects={filterArr(projects, 'SE')} experience={filterArr(experiences, 'SE')}/>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ projects, experiences }) => {
  return {
    projects,
    experiences,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => {
      dispatch(getProjects());
    },
    fetchExperiences: () => {
      dispatch(getExperiences());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
