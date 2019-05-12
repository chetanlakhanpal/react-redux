import React from 'react'
import { connect } from 'react-redux';

const _Leaderboard = (props) => {

  let {users} = props

  const _users = Object.values(users)

  users = _users
  .map((value) => {
    return {...value, ansCount:  Object.keys(value.answers).length}
  })
  .sort((a, b) => {
    const a_count = a.ansCount +  a.questions.length
    const b_count = b.ansCount +  b.questions.length

    return a_count < b_count ? 1 : -1
  })

  return (
  <div className="leaderboard">
    {users.map((value) => (
      <div key={value.id} className="user-card">
        <img src={'./images/' + value.avatarURL} className="rounded-circle"  width="100" alt=""/>
        <h1>{value.name}</h1>
        <p>Answered Questions: {value.ansCount}</p>
        <p>Created Questions: {value.questions.length}</p>
        <p><b>Score: {value.ansCount + value.questions.length}</b></p>
        <hr/>
      </div>
    ))}
  </div>
  )
}

const mapStateToProps = (store) => ({users: store.users.users})
const mapDispatchToProps = {}
const Leaderboard = connect(mapStateToProps, mapDispatchToProps)(_Leaderboard)

export default Leaderboard