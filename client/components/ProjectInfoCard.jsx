import React from 'react';

export default function ProjectInfoCard(props) {
  const { name, description, } = props.project;
  return (
    <div>
      <h5>{name}</h5>
      <em>{description}</em>
    </div>
  )
}
