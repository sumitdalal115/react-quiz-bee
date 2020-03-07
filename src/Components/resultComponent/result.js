import React, { Component } from "react"

class ResultBox extends Component {
    render() {
        return (
        <div className="score-board">
            <div className="score">your score is {this.props.score} / 5 </div>
            <button className="playBtn" onClick={ this.props.reset } >Play again!!</button>
        </div>
        );
    }
}
export default ResultBox;