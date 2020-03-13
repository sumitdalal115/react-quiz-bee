import React, {Component} from "react";

class QuestionBox extends Component {
    state = {
        options: this.props.options,
        answer: ''
    }

    setAnswer = (answer) => {
        console.log('im setting answer')
        this.setState({
            options: [answer],
            answer: answer
        });
    }

    render(){
        return (
            <div className="questionBox">
                <div className="question">{this.props.question}</div>
                {
                    this.state.answer === '' && this.state.options.map((option, index) => (
                        <button key={index} className="answerBtn" onClick={ () => { this.setAnswer(option); this.props.onSelection(option) }}> 
                            {option} 
                        </button> 
                    ))
                    
                }
                {
                    this.state.answer !== '' && this.state.options.map((option, index) => (
                        <button key={index} className="answerBtn"> 
                            {option} 
                        </button> 
                    ))
                    
                }
            </div>
        );
    }
}

export default QuestionBox;