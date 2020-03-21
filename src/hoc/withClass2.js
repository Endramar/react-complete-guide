// this is a functional hoc which will be used as withClass2(App, ) 

import React from 'react';

const withClass2 = (WrappedComponent, className) => {
    return (props) => (<div className={className}><WrappedComponent {...props} /></div>) // we have to forward the props so that inner component can use its properties!!!!!
}


export default withClass2;