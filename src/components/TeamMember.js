import React from 'react';

const TeamMember = (props) => {
  console.log(props);
  const person = props.person;

  return (
    <div className= "TeamMember">
      <h2>{person.name}</h2>
      <h3>{person.role}</h3>
      <p>{person.email}</p>
    </div>
  )
}

export default TeamMember; 