// A sample hoc (high order component) which only wraps the component with classes

import React from 'react';
const withClass = (props) => (
    <div className={props.classes}>
        {props.children}
    </div>
);

export default withClass;