import React, {Component} from 'react';
import { connect } from 'react-redux';

import { getProjects } from '../store';

import Card from './Card';


class Home extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchProjects()
  }
  render(){
    const { projects } = this.props;
    const filterArr = (arr, field) => arr.filter(el => el.field === field);
    console.log('ARRAY', filterArr(projects, 'ME'))
    return (
      <div>
        Home
        {
          <div>
            <Card heading='Mechanical Engineering' projects={filterArr(projects, 'ME')} />
            <Card heading='Software Engineering' projects={filterArr(projects, 'SE')} />
          </div>
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
