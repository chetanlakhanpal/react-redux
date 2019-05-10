import React from "react";
import { connect } from "react-redux";

const _Card = ({data, submitEnabled, users}) => {

const submitClick = () => {

}

return (
<div className="card">
  <div className="card-header">
    <h3>{users[data.author].name} asks:</h3>
  </div>
  <div className="card-body">
    <h4>Would you Rather ...</h4>
    <input type="radio" name={data.id} value={data.optionOne.text} id={data.id+"_1"}/>
    <label htmlFor={data.id+"_1"}>{data.optionOne.text}</label>
    <input type="radio" name={data.id} value={data.optionTwo.text} id={data.id+"_2"}/>
    <label htmlFor={data.id+"_2"}>{data.optionTwo.text}</label>
    {submitEnabled && (
      <button type="button" className="btn btn-primary" onClick={() => submitClick}>Submit</button>
    )}
    </div>
</div>
)}

export const Card = connect((store) => ({users: store.users.users}))(_Card)

export const Cards = ({data}) => {
  const visibleData = data.filter(data => data.visibility)[0]
  const cardData = visibleData.data
  const btnEnabled = visibleData.type === 'UNANSWERED'
  return (
  <div className="tab-body">
    {cardData.map((tabData, index) => (
      <div className="row" key={index}>
      <Card key={index} data={tabData} submitEnabled={btnEnabled}/>
      </div>
    ))}
  </div>
  )}