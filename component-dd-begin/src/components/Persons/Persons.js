import React from 'react';

import Person from './Person/Person';

const persons = props => props.persons.map((person, index) => 
    <Person
      click={() => props.clicked(index)}
      name={person.name}
      age={person.age}
      key={person.id}
      changed={event => props.changed(event, index)}/>
  );

export default persons;