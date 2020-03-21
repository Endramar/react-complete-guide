import React from 'react';

import classes from './Person.css';
import Template  from '../../../hoc/Template';

import withClass2 from '../../../hoc/withClass2';

// import styled from 'styled-components';

// const StyledDiv = styled.div`
// width: 60%;
// margin: 16px auto;
// border: 1px solid #eee;
// box-shadow:  0 2px 3px #ccc;
// padding: 16px;
// text-align: center;

// '@media (min-width: 500px)': {
//     width: '450px'
// }`;

const person = (props) => {

    // A TEST CODE WHICH THROWS AN ERROR
    // let rnd = Math.random();
    // if(rnd > 0.3){
    //     throw new Error('This is a person error!')
    // }

    return (
        // a styled div created by using styled-components !!!!!
        // <StyledDiv>
        // <div className={classes.Person}>

        // we can use React.Fragment as welll !!!!!
        <Template> 
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </Template>

        // </div>
        // </StyledDiv>
    );
}

// export default Radium(person);

export default withClass2(person, classes.Person);