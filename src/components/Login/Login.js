import React, { PureComponent } from 'react'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { loginUser } from "../../actions/user";

class Login extends PureComponent {

  constructor(){
    super()
    this.dropdownRef = React.createRef()
  }

  onSubmit = () => {
    const value = this.dropdownRef.current.value
    const user = this.props.users[value]
    this.props.loginUser(user)
  }

  render = () => {
    const users = this.props.users || {}
    const userKeys = Object.keys(users)
    if(this.props.loggedInUser){
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
          <select ref={this.dropdownRef}>
          <option value=''>Select</option>
            {userKeys.map(value => (
              <option key={value} value={value}>{users[value].name}</option>
            ))}
          </select>
        </div> 
        <button className="btn btn-primary" onClick={this.onSubmit}>Login</button>  
      </div>
    </div>
    )
  }
}

const mapStateToProps = (store) => ({ users: store.users.users, loggedInUser: store.users.loggedInUser })

const mapDispatchToProps =  { loginUser }

export default connect(mapStateToProps, mapDispatchToProps)(Login)