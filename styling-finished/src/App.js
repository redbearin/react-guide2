import React, { Component } from 'react';

import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Thomas', age: 28 },
      { id: '2', name: 'Rachel', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  };

  nameChangeHandler = (event, index) => {
    const persons = this.state.persons.slice();
    persons[index].name = event.target.value;
    this.setState({ persons: persons }); 
  }

  deletePersonHandler = personIndex => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClass = [classes.button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangeHandler(event, index)}
              />
            );
          })}
        </div>
      );

      btnClass.push(classes.buttonColorClose);
    }

    const textClasses = [];
    if (this.state.persons.length <= 2) {
      textClasses.push(classes.alert);
    }
    if (this.state.persons.length <= 1) {
      textClasses.push(classes.warning);
    }

    return (
      <div className={classes.app}>
        <h1>Guest Information</h1>
        <p className={textClasses.join(' ')}>Click to open or close guest cards</p>
        <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
