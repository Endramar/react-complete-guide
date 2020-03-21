
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    personList: [
      { id: 1, name: "Ali", age: 31 },
      { id: 2, name: "Kerem", age: 25 },
      { id: 3, name: "Okan", age: 26 }
    ],
    showPersons: false
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

    this.setState({ personList: persons });
  }

  renderPersons() {

    return this.state.personList.map((person, index) => {
      return <Person
        key={person.id}
        click={() => this.deletePersonHandler(index)}
        change={(event) => this.nameChangeHandler(event, person.id)}
        name={person.name}
        age={person.age}></Person>
    });

  }

  render() {

    const buttonSyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {  // we can add hover to inline style by using Raidum !!!*****
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let personRenderList = null;
    if (this.state.showPersons) {
      personRenderList = this.renderPersons();
      buttonSyle.backgroundColor = 'red';

      buttonSyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let paragraphClass = null;
    if (this.state.personList.length < 2) {
      paragraphClass = 'red bold';
    }
    else if (this.state.personList.length < 3) {
      paragraphClass = 'red';
    }

    return (
      // StyleRoot is necassary for media queries or keyframes. we do not need them for sudo selectors!!!
      // <StyleRoot> 
        <div className="App" >
          <h1>Hi I am a react app!</h1>
          <p className={paragraphClass}>This is working</p>
          <button style={buttonSyle}
            onClick={this.togglePersonsHandler}>Toggle</button>
          {personRenderList}
        </div>
      // </StyleRoot>
    );
  }

}

// export default Radium(App); // we need to wrap the app with radium to make it work !!!
export default App;
