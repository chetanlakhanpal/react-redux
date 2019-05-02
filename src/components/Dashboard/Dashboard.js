import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Tab from "../helpers/Tab";
import { fetchUsers } from '../../actions/user'

const Dashboard = ({questions, loggedInUser}) => {
  if (!loggedInUser.answers){
    return <div></div>
  }

  const answeredQuestionsData = Object.keys(loggedInUser.answers)
  const unansweredQuestion = questions.filter(question => answeredQuestionsData.indexOf(question.id) !== -1 ) || []
  const answeredQuestion = questions.filter(question => answeredQuestionsData.indexOf(question.id) > -1 ) || []

  const tabData = { 'Unanswered Questions': unansweredQuestion, 'Answered Questions': answeredQuestion }

  return (
    <Tab data={tabData}/>
  )
}

const mapStateToProps = (store) => ({questions: store.questions.allQuestions, loggedInUser: store.users.loggedInUser})

export default connect(mapStateToProps, {fetchUsers})(Dashboard)