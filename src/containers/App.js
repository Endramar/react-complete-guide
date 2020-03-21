
import React, { Component } from 'react';

//import './App.css';

// IMPORTANT
import classes from './App.css'; // we can import with name by changing the webpack css configuraition, we set module:true and localIdentName : '[name]__[local]__[hash:base64:5]'

// import ErrorBoundry from '../components/ErrorBoundry/ErrorBoundry';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import WithClass from '../hoc/WithClass';
import  Template  from '../hoc/Template';
import withClass2 from '../hoc/withClass2';

class App extends Component {

  state = {
    personList: [
      { id: 1, name: "Ali", age: 31 },
      { id: 2, name: "Kerem", age: 25 },
      { id: 3, name: "Okan", age: 26 }
    ],
    showPersons: false,
    changeCount : 0 // a sample value which keeps count of name  change 
  };


  togglePersonsHandler = () => {
    let currentValue = this.state.showPersons;
    this.setState({ showPersons: !currentValue })
  }

  deletePersonHandler = (index) => {
    let persons = [...this.state.personList]; // create a copy af the array 
    persons.splice(index, 1);
    this.setState({ personList: persons });
  }


  nameChangeHandler = (event, id) => {

    let selectedPersonIndex = this.state.personList.findIndex(x => x.id === id);

    // create a copy of the object 
    const selectedPerson = { ...this.state.personList[selectedPersonIndex] };
    selectedPerson.name = event.target.value;

    const persons = [...this.state.personList];
    persons[selectedPersonIndex] = selectedPerson;

    // this.setState({ personList: persons , changeCount : this.state.changeCount + 1 }); // This is wron because we depend on the old state for changeCount !!!
    
    // THE CORRECT WAY IS BELOW

    this.setState((prevState,prevProps) => {
      return {
        personList : persons,
        changeCount : prevState.changeCount + 1
      }
    });
    
  }


  render() {

    return (
      // Radium StyleRoot is necassary for media queries or keyframes. we do not need them for sudo selectors!!!
      // <StyleRoot> 

      // <WithClass classes={classes.App} >
      <Template>
        <Cockpit toggle={this.togglePersonsHandler} personCount={this.state.personList.length}></Cockpit>
        {this.state.showPersons ? <Persons clicked={this.deletePersonHandler} changed={this.nameChangeHandler} persons={this.state.personList}></Persons> : null}
      </Template>

      /* </WithClass> */
      // </StyleRoot>
    );
  }

}

// export default Radium(App); // we need to wrap the app with radium to make it work !!!
export default withClass2(App, classes.App);
