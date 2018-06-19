import React from 'react';

export default function ExperienceInfoCard(props) {
  const { college, major, gradDate, coursework, gpa, achievements, } = props.education;
  return (
    <div>
      <h5>{college}  {gradDate}</h5>
      <h5>{major}</h5>
      <em>gpa: {gpa}</em>
      <b>
        Coursework
        { coursework.map((el, ind) => <li key={ind}>{el}</li>) }
        Achievements
        { achievements.map((el, ind) => <li key={ind}>{el}</li>) }
      </b>
    </div>
  )
}
