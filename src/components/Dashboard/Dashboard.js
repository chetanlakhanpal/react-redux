import React from "react";
import { connect } from "react-redux";
import Tab from "../helpers/Tab";
import { fetchUsers } from '../../actions/user'

const Dashboard = ({questions, loggedInUser}) => {
  if (loggedInUser === null || loggedInUser.answers === undefined || loggedInUser.answers === null){
    return <div></div>
  }
  const allQuestions = Object.values(questions)
  const answeredQuestionsData = Object.keys(loggedInUser.answers)
  const unansweredQuestion = allQuestions.filter(question => answeredQuestionsData.indexOf(question.id) === -1 )
  const answeredQuestion = allQuestions.filter(question => answeredQuestionsData.indexOf(question.id) > -1 )

  const tabData = [{ data: unansweredQuestion, visibility: true, label: 'Unanswered Questions', type: 'UNANSWERED'},
                   { data: answeredQuestion, visibility: false, label: 'Answered Questions', type: 'ANSWERED' } ]

  return (
    <Tab data={tabData}/>
  )
}

const mapStateToProps = (store) => ({questions: store.questions.allQuestions, loggedInUser: store.users.loggedInUser, users: store.users})

export default connect(mapStateToProps, {fetchUsers})(Dashboard)