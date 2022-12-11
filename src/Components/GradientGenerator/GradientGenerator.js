import './GradientGenerator.css'
import React from 'react'
import { Color } from '../Color/Color'
import { Angle } from '../Angle/Angle'

export class GradientGenerator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: true,
            angle: 180,
            hue: Math.floor(Math.random() * 360),
            saturation: 50,
            lightness: 50,
            hue2: Math.floor(Math.random() * 360),
            saturation2: 50,
            lightness2: 50
        }

        this.changeHue = this.changeHue.bind(this)
    }
    changeAngle = (newValue) => {
        this.setState({
            angle: newValue
        })
    }
    changeHue = (newValue) => {
        this.setState({
            hue: newValue
        })
    }
    changeSaturation = (newValue) => {
        this.setState({
            saturation: newValue
        })
    }
    changeLightness = (newValue) => {
        this.setState({
            lightness: newValue
        })
    }
    changeHue2 = (newValue) => {
        this.setState({
            hue2: newValue
        })
    }
    changeSaturation2 = (newValue) => {
        this.setState({
            saturation2: newValue
        })
    }
    changeLightness2 = (newValue) => {
        this.setState({
            lightness2: newValue
        })
    }
    setBackground = () => {
        return `linear-gradient(${this.state.angle}deg, hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%), hsl(${this.state.hue2}, ${this.state.saturation2}%, ${this.state.lightness2}%))`
    }
    setRandomGradient = () => {
        this.setState({
            angle: Math.floor(Math.random() * 360),
            hue: Math.floor(Math.random() * 360),
            hue2: Math.floor(Math.random() * 360),
            saturation: Math.floor(Math.random() * 100),
            saturation2: Math.floor(Math.random() * 100),
            lightness: Math.floor(Math.random() * 100),
            lightness2: Math.floor(Math.random() * 100)
        })
    }
    setTextColor = () => {
        return (this.state.lightness + this.state.lightness2) / 2 > 50 ? '#000' : '#fff'
    }
    copyOnClick = () => {
        navigator.clipboard.writeText(this.setBackground())
        alert("Copied: " + this.setBackground())
    }
    render() {
        const hideShowText = this.state.visible === true ? '⚙️ Hide Settings ⚙️' : '⚙️ Show Settings ⚙️'
        const hideShowElement = (
            <div className='flex element' style={{ background: this.setBackground(), color: this.setTextColor(), cursor: 'pointer' }}
                onClick={() => { this.setState({ visible: !this.state.visible }) }}>
                <h3>{hideShowText}</h3>
            </div>
        )
        if (this.state.visible === false) {
            return (
                <div className='gradient-generator grid' style={{ background: this.setBackground() }}>
                    {hideShowElement}
                </div>
                )
        }
        return (
            <div className='gradient-generator grid' style={{ background: this.setBackground() }}>
                <div>
                    <h2 className='flex element' style={{ background: this.setBackground(), color: this.setTextColor() }} >Gradient Generator</h2>
                    <Angle onChangeAngle={this.changeAngle} angle={this.state.angle}
                        hue={this.state.hue} saturation={this.state.saturation} lightness={this.state.lightness}
                        hue2={this.state.hue2} saturation2={this.state.saturation2} lightness2={this.state.lightness2} />

                    <div className='flex-colors'>
                        <Color
                            onChangeHue={this.changeHue}
                            onChangeSaturation={this.changeSaturation}
                            onChangeLightness={this.changeLightness}
                            name="Color 1"
                            hue={this.state.hue}
                            saturation={this.state.saturation}
                            lightness={this.state.lightness}
                        />
                        <Color
                            onChangeHue={this.changeHue2}
                            onChangeSaturation={this.changeSaturation2}
                            onChangeLightness={this.changeLightness2}
                            name="Color 2"
                            hue={this.state.hue2}
                            saturation={this.state.saturation2}
                            lightness={this.state.lightness2}
                        />
                    </div>
                    <div className='grid element' style={{ background: this.setBackground(), color: this.setTextColor(), cursor: 'pointer' }}
                        onClick={this.copyOnClick}>
                        <h3>Code:</h3>
                        <h5>Click to copy</h5>
                        <p>{this.setBackground()}</p>
                    </div>
                    <div className='flex element' style={{ background: this.setBackground(), color: this.setTextColor(), cursor: 'pointer' }}
                        onClick={this.setRandomGradient}>
                        <h3>Random Gradient</h3>
                    </div>
                    {hideShowElement}
                </div>
            </div>
        )
    }
}