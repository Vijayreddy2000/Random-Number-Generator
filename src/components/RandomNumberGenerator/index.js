// Write your code here
import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onChangeButton = () => {
    this.setState(() => ({
      randomNumber: Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="bg-container1">
          <h1 className="head">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="btn" onClick={this.onChangeButton}>
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
