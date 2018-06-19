import React from 'react';

export default function ExperienceInfoCard(props) {
  const { company, title, date, description} = props.experience;
  return (
    <div>
      <h5>{company}</h5> <h5>{date}</h5>
      <em>{title}</em>
      { description.map((el, ind) => <li key={ind}>{el}</li>) }
    </div>
  )
}
