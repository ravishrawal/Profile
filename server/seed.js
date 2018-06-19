const axios = require('axios');

const { Project, Experience, Education } = require('./db').models;
const { db } = require('./db'); 

const storeToDB = (projects, experiences, educations) => {
  Promise.all([
    Project.bulkCreate(projects),
    Experience.bulkCreate(experiences),
    Education.bulkCreate(educations),
  ])
  .then(() => console.log('seeded'))
  .catch((er) => console.log('seed error: ', er.message));
};

const projectList = [ {name: 'project1', description: 'A test project', pics: [], field: 'ME'},
                      {name: 'project2', description: 'A test project also', pics: [], field: 'SE'} ]

const expList = [ {title: 'work1', company: 'company1', date: 'June 2016 - July 2016', description: ['did this', 'did that'], field: 'ME'},
                  {title: 'work2', company: 'company2', date: 'June 2017 - July 2017', description: ['did this2', 'did that2'], field: 'SE'} ]

const eduList = [ {college: 'college1', major: 'Mech Eng', gradDate: 'May 2016', coursework: ['course1', 'course2'], gpa: 3.82, achievements: ['award1', 'award2'], field: 'ME'},
                  {college: 'college2', major: 'Soft Eng', gradDate: 'December 2017', coursework: ['course12', 'course22'], gpa: 3.81, achievements: ['award12', 'award22'], field: 'SE'} ]

db.sync({force: true}).then(()=>storeToDB(projectList, expList, eduList));
