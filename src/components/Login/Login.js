import React, { PureComponent } from 'react'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { loginUser } from "../../actions/user";

class Login extends PureComponent {

  constructor(props){
    super()
    this.state = {
      dropdownValue: ''
    }
  }

  onChange = (value) => {
    this.setState(state => {
      return {dropdownValue: value}
    })
  }

  onSubmit = () => {
    const user = this.props.users[this.state.dropdownValue]
    this.props.loginUser(user)
  }
 
  render = () => {
    const users = this.props.users || {}
    const userKeys = Object.keys(users)

    if(this.props.loggedInUser !== null){
      return <Redirect to='/dashboard' />
    }
  
    return (
    <div className="card">
      <div className="card">
        <h1>Welcome</h1>
        <p>Please sign in to continue</p>
      </div>
      <div className="card-body">
        <img src="" />
        <div>
          <select onChange={(event) => this.onChange(event.target.value)}>
          <option value=''>Select</option>
            {userKeys.map(value => (
              <option key={value} value={value}>{users[value].name}</option>
            ))}
          </select>
        </div> 
        <button className="btn btn-primary" onClick={this.onSubmit} disabled={this.state.dropdownValue === ''}>Login</button>  
      </div>
    </div>
    )
  }
}

const mapStateToProps = (store) => ({ users: store.users.users, loggedInUser: store.users.loggedInUser })

const mapDispatchToProps =  { loginUser }

export default connect(mapStateToProps, mapDispatchToProps)(Login)