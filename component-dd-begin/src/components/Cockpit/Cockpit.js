import React from 'react';
import classes from './Cockpit.css';

const cockpit = props => {
  // eslint-disable-next-line
  let btnClass = '';
  const assignedClasses = [];

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Guest Information</h1>
      <p 
        className={assignedClasses.join(' ')}>
        Click to open or close guest cards
      </p>
      <button 
        className={classes.btnClass} 
        onClick={props.clickBtn}>
        Toggle Persons
      </button>
    </div>
  );
}

export default cockpit;