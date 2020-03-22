import React from 'react';

import classes from './Person.css';
import Template from '../../../hoc/Template';

import withClass2 from '../../../hoc/withClass2';

import PropTypes from 'prop-types';

import AuthContext from '../../../context/auth-context';

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

class Person extends React.Component {

    static contextType = AuthContext; // this has to be typed exactly like this to access the context;


    componentDidMount(){
        console.log(this.context.isAuthenticated);
    }

    render() {
        return (
            <AuthContext.Consumer>
                {
                    (context) => <Template>
                        {context.isAuthenticated ? <p>It is an authenticate Person</p> : <p>Please log in!!</p>}
                        <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old.</p>
                        <p>{this.props.children}</p>
                        <input type="text" onChange={this.props.change} value={this.props.name} />
                    </Template>
                }
            </AuthContext.Consumer>
        );
    }
}



/// restrictiobn of proptypes
Person.protoType = {
    name: PropTypes.string,
    click: PropTypes.func,
    change: PropTypes.func,
    age: PropTypes.number
};

// export default Radium(person);

export default withClass2(Person, classes.Person);