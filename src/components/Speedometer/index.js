// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    this.setState(prev => {
      if (prev.speed < 200) {
        return {speed: prev.speed + 10}
      }
      return {speed: prev.speed}
    })
  }

  onBrake = () => {
    this.setState(prev => {
      if (prev.speed > 0) {
        return {speed: prev.speed - 10}
      }
      return {speed: prev.speed}
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-bg-container">
        <div className="speedometer-container">
          <h1 className="speedometer-heading">SPEEDOMETER</h1>
          <img
            className="image"
            alt="speedometerImage"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          />
          <h1 className="heading">
            speed is <span className="speed">{speed}mph</span>
          </h1>
          <p className="description">Min limit is 0mph, Max limit is 200mph</p>
          <div>
            <button
              className="button"
              type="button"
              onClick={this.onAccelerate}
            >
              Accelerate
            </button>
            <button
              className="outline-button"
              type="button"
              onClick={this.onBrake}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
