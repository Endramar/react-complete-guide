import React from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context';

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
        <AuthContext.Consumer>
            { context => <button onClick={context.login}>Login</button>}
        </AuthContext.Consumer>

    </div>
    );
}


export default cockpit;