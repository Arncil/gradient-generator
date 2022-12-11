import './Color.css'
import React from 'react'

export class Color extends React.Component {
    setBackground = () => {
        return `hsl(${this.props.hue}, ${this.props.saturation}%, ${this.props.lightness}%)`
    }
    setTextColor = () => {
        return this.props.lightness > 50 ? '#000' : '#fff'
    }
    render() {
        return (
            <div className='color flex'>
            <div className='element' style={{ background: this.setBackground(), color: this.setTextColor()}}>
                <h3 className='grid'>{this.props.name}</h3>
                <div className='grid'>
                    <label for='hue'>Hue: {this.props.hue}</label>
                    <div className='flex'>
                        <p>0</p>
                        <input type='range' name='hue' id='hue' min='0' max='360'
                            onChange={(e) => {this.props.onChangeHue(e.target.value)}}
                            value={this.props.hue} />
                        <p>360</p>
                    </div>
                </div>
                <div className='grid'>
                    <label for='saturation'>Saturation: {this.props.saturation} </label>
                    <div className='flex'>
                        <p>0%</p>
                        <input type='range' name='saturation' min='0' max='100'
                            onChange={(e) => { this.props.onChangeSaturation(e.target.value) }} 
                            value={this.props.saturation}/>
                        <p>100%</p>
                    </div>
                </div>
                <div className='grid'>
                    <label for='lightness'>Lightness: {this.props.lightness}</label>
                    <div className='flex'>
                        <p>0%</p>
                        <input type='range' name='lightness' min='0' max='100'
                            onChange={(e) => { this.props.onChangeLightness(e.target.value) }} 
                            value={this.props.lightness}/>
                        <p>100%</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}