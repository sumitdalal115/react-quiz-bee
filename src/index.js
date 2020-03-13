import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";
import QuestionBox from "./Components/questionComponent/questionBox";
import ResultBox from "./Components/resultComponent/result"

class QuizBee extends Component {
    state = {
        questionBank: [],
        score: 0,
        attemptCount : 0
    }

    getQuestions = () => {
        console.log('QuizBee: fetching questions');
        quizService().then(questions => {
            this.setState({
                questionBank : questions
            });
        });
    }

    computeAnswer = (answer, correct) => {
        let score = this.state.score;
        let attemptCount = this.state.attemptCount;
        if(answer === correct){
            ++score;
        }
        this.setState({
            score: score,
            attemptCount: ++attemptCount
        });
    }

    resetGame = () => {        
        console.log('QuizBee: resetting game');
        this.setState({
            score: 0,
            attemptCount: 0,
            questionBank:[]
        });
        this.getQuestions();
    }

    componentDidMount() {
        console.log('QuizBee: componentDidMount*******');
        this.getQuestions();
    }

    componentDidUpdate() {
        console.log('QuizBee: componentDidUpdate*******');
    }

    render() {
        return (
        <div className="container">
            <div className="title">QuizBee 
                <button className="resetBtn" onClick={this.resetGame}>Reset</button>
            </div>
            { this.state.questionBank.length > 0 
            && this.state.attemptCount < 5 
            && this.state.questionBank.map(
                ({question, answers, correct, questionId}) => 
                    <QuestionBox question={question} 
                        options={answers} 
                        correct={correct} 
                        key={questionId} 
                        onSelection= {answer => this.computeAnswer(answer, correct)} /> 
            )}
            {
                this.state.attemptCount === 5 && <ResultBox score={this.state.score} reset={this.resetGame} />
            }
        </div>
        );
    }
} 

ReactDOM.render(<QuizBee />, document.getElementById("root"));