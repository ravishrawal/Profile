import React, {Component} from 'react';
import { connect } from 'react-redux';

import { getProjects, getExperiences, getEducation } from '../store';

import Card from './Card';
import { cardSetup } from '../../public/jquery';


class Home extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    Promise.all([
      this.props.fetchProjects(),
      this.props.fetchExperiences(),
      this.props.fetchEducation()
    ])
    .then(() => cardSetup());
  }
  render(){
    const { projects, experiences, education } = this.props;
    const filterArr = (arr, field) => arr.filter(el => el.field === field);
    return (
      <div>
          <h1 className='info'>Ravish Rawal</h1>
          <div className='container'>
            <Card heading='Mechanical Engineering' projects={filterArr(projects, 'ME')} experience={filterArr(experiences, 'ME')} education={filterArr(education, 'ME')}/>
            <Card heading='Software Engineering' projects={filterArr(projects, 'SE')} experience={filterArr(experiences, 'SE')} education={filterArr(education, 'SE')}/>
          </div>
      </div>
    )
  }
}

const mapStateToProps = ({ projects, experiences, education }) => {
  return {
    projects,
    experiences,
    education,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => {
      dispatch(getProjects());
    },
    fetchExperiences: () => {
      dispatch(getExperiences());
    },
    fetchEducation: () => {
      dispatch(getEducation());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
