import React from 'react';

import TeamMember from './components/TeamMember.js'
import TeamForm from './components/TeamForm.js';
import { useState } from 'react';

import './App.css';

function App() {

  const [team, setTeam] = useState([
    {name: 'Ben', role: 'father', email: 'ben@urena.dev'},
    {name: 'Sylvana', role: 'daughter', email: 'sylvana@urena.dev'},
  ]
  )
  return (
    <div className= 'App'>
      <h1>Team Builder</h1>
      <TeamForm setTeam = {setTeam} />
        {team.map(person => <TeamMember key= {person.name} person={person} />)}
    </div>
  );
}

export default App;
