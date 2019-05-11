import React, { PureComponent } from "react";
import { connect } from 'react-redux'
import './Question.css'
import { addQuestion } from "../../actions/question";
import { Redirect } from 'react-router-dom'

class Question extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      questionSaved: false,
      saving: false,
      optionOneText: '',
      optionTwoText: ''
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    
    this.setState((state) => ({
      ...state, saving: true
    }))

    const questionData = {optionOneText: this.state.optionOneText, optionTwoText: this.state.optionTwoText, author: this.props.author.id}

    this.props.addQuestion(questionData)
    .then(() => {
      this.setState((state) => ({
        ...state, questionSaved: true, saving: false
      }))
    }, () => {
      this.setState((state) => ({...state, saving: false}))
    })
  }

  updateText = (type, value) => {
    this.setState((state) => ({
      ...state,
      [type]: value
    }))  }
  
  render () {
    if(this.state.questionSaved){
      return <Redirect to='/dashboard' />
    }
    return (
      <div className="card">
        <div className="card-heading">
          <h1>Create New Question</h1>
        </div>
        <div className="card-body">
          <form onSubmit={(event) => this.onSubmit(event)}>
            <div className="form-group">
              <small>Complete the question:</small>
              <h2>Would you rather ...</h2>
              <input required type="text" className="form-control" placeholder="Enter Option one here" name="option_1" onChange={(event) => {
                this.updateText('optionOneText', event.target.value)
                }} value={this.state.optionOneText}/>
              <h3>OR</h3>
              <input required type="text" className="form-control" placeholder="Enter Option two here" name="option_2" onChange={(event) => {
                this.updateText('optionTwoText', event.target.value)
                }} value={this.state.optionTwoText}/>
              <br></br>
              <button className="btn btn-success" disabled={(!this.state.optionOneText || !this.state.optionTwoText) || this.state.saving}>
                {this.state.saving? 'Saving' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({author: store.users.loggedInUser})

export default connect(mapStateToProps, {addQuestion})(Question)