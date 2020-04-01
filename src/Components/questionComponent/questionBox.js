import React, {Component} from "react";

class QuestionBox extends Component {
    state = {
        options: this.props.options,
        answer: this.props.answer
    }

    setAnswer = (questionId, answer) => {
        this.setState({
            options: [answer],
            answer: answer
        });
        this.props.onSelection(questionId, answer);
    }

    render(){
        return (
            <div className="questionBox">
                <div className="question">{this.props.question}</div>
                {                   
                    this.state.options.map((option, index) => (
                        (this.state.answer === ''
                        || this.state.answer === option )
                        && <button key={index} className="answerBtn" onClick={ () => this.state.answer === '' ?  this.setAnswer(this.props.questionId, option) : null }> 
                            {option} 
                        </button> 
                    ))                    
                }
            </div>
        );
    }
}

export default QuestionBox;