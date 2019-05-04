import React, { PureComponent } from "react";
import { Cards } from '../helpers/Card'

class Tab extends PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      data: props.data
    }
  }
  

  activateTab = (index) => {
    this.setState(state => {
      let newState = state.data.map(data => ({...data, visibility: false}))
      newState[index].visibility = true
      return {data: newState}
    })
  }
  
  render = () =>  (
    <div className="tabs">
      {this.state.data.map((tab, index) => (
        <div key={index} className="tab">
          <button type="button" onClick={() => this.activateTab(index)} className="btn btn-success" disabled={tab.visibility}>
            <strong>{tab.label}</strong>
          </button>
        </div>
      ))}

      <Cards data={this.state.data}/>
    </div>
  )
}

export default Tab