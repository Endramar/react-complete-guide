import React, { Component } from 'react';

class ErrorBoundry extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError : true,
            errorMessage : error
        });
    }


    renderErrorContent = () => {
        return <h1 style={{ color: 'red' }}>An error has occured</h1>
    }


    render() {
        return <div>
            {this.state.hasError ? this.renderErrorContent() : this.props.children}
        </div>
    }

}


export default ErrorBoundry;