import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    let buttonClasses = [classes.Button];

    if (props.showPersons) {
        buttonClasses.push(classes.Red);
    }

    let paragraphClass = null;
    if (props.personCount < 2) {
        paragraphClass = classes.red + " " + classes.bold;
    }
    else if (props.personCount < 3) {
        paragraphClass = classes.red;
    }

    return (<div>
        <h1>Hi I am a react app!</h1>
        <p className={paragraphClass}>This is working</p>
        <button className={buttonClasses.join(' ')}
            onClick={props.toggle}>Toggle</button>
    </div>
    );
}


export default cockpit;