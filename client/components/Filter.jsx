import React from 'react';


export default function Filter(props) {
    return (
      <div>
        <h5>{ props.category.toUpperCase() }</h5>
        <input type="range" min="0" max="100" name="filter" onChange={(ev)=>props.filter(props.category, ev.target.value)} ></input>
        <p className='filterValue'>{props.val}g</p>
      </div>
    )
}
