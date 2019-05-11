import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const _Card = ({data, users}) => {

return (
<div className="card">
  <div className="card-header">
    <h3>{users[data.author].name} asks:</h3>
  </div>
  <div className="card-body">
    <img src={'./images/' + users[data.author].avatarURL} width="100" className="rounded-circle" />
    <h4>Would you Rather ...</h4>
    <p>{data.optionOne.text}</p>
    <p>or</p>
    <p>{data.optionTwo.text}</p>
    <NavLink className="btn btn-primary" to={'/questions/'+ data.id}>View Poll</NavLink>
    </div>
</div>
)}

export const Card = connect((store) => ({users: store.users.users}))(_Card)

export const Cards = ({data}) => {
  const visibleData = data.filter(data => data.visibility)[0]
  const cardData = visibleData.data

  return (
  <div className="tab-body">
    {cardData.map((tabData, index) => (
      <div className="row" key={index}>
      <Card key={index} data={tabData}/>
      </div>
    ))}
    {cardData.length === 0 && (
      <p>No polls to show.</p>
    )}
  </div>
  )
}
