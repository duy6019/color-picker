import React, { Component } from 'react';

class SizeSetting extends Component {
    onReSizeClick = this.props.onReSizeClick;
    render() {
        return (
            <div className="card text-white mb-3" >
    <div className="card-header" style={{ backgroundColor: '#fcf8e3', color: '#a86d3b' }}>Size : {this.props.fontSize}px</div>
                <div className="card-body">
                    <div>
                        <button onClick = {()=>this.onReSizeClick(-2)} type="button" className="btn btn-success">Giảm</button>
                        &nbsp;
                        <button onClick = {()=>this.onReSizeClick(+2)} type="button" className="btn btn-success">Tăng</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SizeSetting;
