import React from "react";

export class Angle extends React.Component {
    setTextColor = () => {
        return (this.props.lightness+this.props.lightness2)/2 > 50 ? '#000' : '#fff'
    }
    setBackground = () => {
        return `linear-gradient(${this.props.angle}deg,
                hsl(${this.props.hue}, ${this.props.saturation}%, ${this.props.lightness}%),
                hsl(${this.props.hue2}, ${this.props.saturation2}%, ${this.props.lightness2}%))`
    }
    render() {
        return (
            <div className='element grid' style={{ background: this.setBackground(), color: this.setTextColor()}}>
            <h3>Angle: {this.props.angle}</h3>
            <div className='flex'>
                <p>0</p>
                <input type='range' name='angle' min='0' max='360'
                    onChange={(e) => { this.props.onChangeAngle(e.target.value) }} 
                    value={this.props.angle}/>
                <p>360</p>
            </div>
        </div>
        )
    }
}