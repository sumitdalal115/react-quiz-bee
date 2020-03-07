import React, {Component} from "react";

class QuestionBox extends Component {
    state = {
        options: this.props.options,
        anwwer: ""
    }

    setAnswer = (answer) => {
        this.setState({
            options: [answer],
            answer: answer
        });
    }

    render(){
        return (
            <div className="questionBox">
                <div className="question">{this.props.question}</div>
                {this.state.options.map((option, index) => (
                    <button className="answerBtn" onClick={ () => this.setAnswer(option) }> 
                        {option} 
                    </button> 
                ))}
            </div>
        );
    }
}

export default QuestionBox;