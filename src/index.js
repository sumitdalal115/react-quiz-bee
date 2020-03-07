import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";
import QuestionBox from "./Components/questionComponent/questionBox";

class QuizBee extends Component {
    state = {
        questionBank: []
    };

    getQuestions = () => {
        quizService().then(questions => {
            this.setState({
                questionBank : questions
            });
        });
    };

    componentDidMount() {
        this.getQuestions();
    };

    render() {
        return (
        <div className="container">
            <div className="title">QuizBee</div>
            { this.state.questionBank.length > 0 && this.state.questionBank.map(
                ({question, answers, correct, questionId}) => 
                <h4> <QuestionBox question={question} options={answers} correct={correct} questionId={questionId} /> </h4>
            )}
        </div>
        );
    }
} 

ReactDOM.render(<QuizBee />, document.getElementById("root"));