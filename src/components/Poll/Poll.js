import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addAnswer } from "../../actions/question";
import './Poll.css'
class Poll extends PureComponent {
  
  constructor(){
    super()
    this.state = {
      submitted: false,
      selectedValue:'optionOne'
    }
  }

  componentDidMount(){
    if(!this.props.users.loggedInUser){
      return
    }
    const questionId = this.props.location.pathname.split('/').pop()
    this.questionId = questionId
    const submitted = this.props.users.loggedInUser.answers[questionId]  !== undefined
    this.setState((state) => ({
      ...state,
      submitted: submitted
    }))
  }

  onValueChange = (value) => {
    this.setState((state) => ({...state, selectedValue: value}))
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.addAnswer({
      authedUser: this.props.users.loggedInUser.id,
      qid: this.questionId,
      answer: this.state.selectedValue
    })
    .then(() => {
      this.setState((state) => ({...state, submitted: true}))
    })
  }

  render () {
   
    if(this.props.questions && this.props.questions.length === 0){
      return null
    }
    
    const questionId = this.props.location.pathname.split('/').pop()
    const question = this.props.questions[questionId]
    const user = this.props.users.users[question.author]
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
    const percentOne = ((question.optionOne.votes.length/totalVotes) * 100).toFixed(1)
    const percentTwo = ((question.optionTwo.votes.length/totalVotes) * 100).toFixed(1)

    return (
      <div className="Poll">
        <div className="card">
          <div className="card-heading">
          {user.name} asks: 
          </div>
          <div className="card-body">
            <img src={'../images/' + user.avatarURL} width="100" className="rounded-circle" />
            {!this.state.submitted && (
              <form onSubmit={(event) => this.onSubmit(event)}>
                <h1>Would you rather...</h1>

                <input type="radio" name="poll" value="optionOne" id="poll_1" checked={this.state.selectedValue === 'optionOne'} onChange={(event) => this.onValueChange(event.target.value)}/>
                <label htmlFor="poll_1">{question.optionOne.text}</label>

                <input type="radio" name="poll" value="optionTwo" id="poll_2" checked={this.state.selectedValue === 'optionTwo'}  onChange={(event) => this.onValueChange(event.target.value)}/>
                <label htmlFor="poll_2">{question.optionTwo.text}</label>

                <button className="btn btn-primary">Submit</button>  
              </form>
            )}
            {this.state.submitted && (
              <div>
                <h1>Results</h1>
                <div className={'answers ' + (this.state.selectedValue === 'optionOne' ? 'selected' : '')}>
                  <p>{question.optionOne.text}</p>
                  <p>Vote: {question.optionOne.votes.length} of {totalVotes}</p>
                  <p>{percentOne}%</p>
                </div>
                <div className={'answers ' + (this.state.selectedValue === 'optionTwo' ? 'selected' : '')}>
                  <p>{question.optionTwo.text}</p>
                  <p>Vote: {question.optionTwo.votes.length} of {totalVotes}</p>
                  <p>{percentTwo}%</p>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({users: store.users, questions: store.questions.allQuestions})

const mapDispatchToProps = {addAnswer}

export default connect(mapStateToProps, mapDispatchToProps)(Poll)