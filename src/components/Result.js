import React, { Component } from 'react';

class Result extends Component {
    render() {
        let {color,fontSize} = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p style={{color:color}}>Color : {color} - Fontsize : {fontSize}px</p>
                <div id="content" style={{ color: color, fontSize: fontSize,border: '3px solid '+color }}>Nội dung setting</div>
            </div>
        );
    }
}

export default Result;
