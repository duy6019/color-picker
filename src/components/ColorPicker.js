import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            colors:['red','green','blue','gray'],
            color:'test'
        }
    }
    onPickerClick = this.props.onPickerClick;
    render() {
        
        let eleColors = this.state.colors.map((color,index)=>{
            return <span 
                onClick = {()=>this.onPickerClick(color)}
                key={index} className="d-inline-block mr-5" 
                style={{ backgroundColor:color}}
                // eslint-disable-next-line react/jsx-no-duplicate-props
                className = {this.props.color === color ? 'active' : ''}
                >
            </span>
        });
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="card text-white mb-3" >
                    <div className="card-header bg-info">Color picker</div>
                    <div className="card-body">
                        {eleColors}
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;
