import React, { Component } from 'react';

class Reset extends Component {
    
    onResetClick = ()=>this.props.onResetClick();

    render() {
        return (
            <button onClick={this.onResetClick} type="button" className="btn btn-primary">reset</button>
        );
    }
}

export default Reset;
