// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    isHead: true,
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickImage = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        isHead: true,
        totalCount: prevState.totalCount + 1,
        headsCount: prevState.headsCount + 1,
      }))
    } else if (tossResult === 1) {
      this.setState(prevState => ({
        isHead: false,
        totalCount: prevState.totalCount + 1,
        tailsCount: prevState.tailsCount + 1,
      }))
    }
  }

  render() {
    const {isHead, totalCount, headsCount, tailsCount} = this.state
    const srcImg = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="app-container">
        <div className="inner-app-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={srcImg} alt="toss result" className="image" />
          <button
            className="toss-button"
            type="button"
            onClick={this.onClickImage}
          >
            Toss Coin
          </button>
          <div className="counter-container">
            <p className="counter">Total: {totalCount}</p>
            <p className="counter">Heads: {headsCount}</p>
            <p className="counter">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
