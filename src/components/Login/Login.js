import React, { PureComponent } from 'react'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { loginUser, logoutUser } from "../../actions/user";

class Login extends PureComponent {

  constructor(props){
    super()
    this.state = {
      dropdownValue: ''
    }
  }

  componentDidMount = () =>{
    if(this.props.location.state && this.props.location.state.type === 'logout'){
      this.props.logoutUser()
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

    if(this.props.location.state && this.props.location.state.type === 'logout'){
      return <Redirect to={{
        pathname:'/login',
        state: undefined
      }} />
    }

    if(this.props.loggedInUser !== null){
      let path = '/dashboard'
      if(this.props.location.state && this.props.location.state.visitedPage){
        path = this.props.location.state.visitedPage
      }
      return <Redirect to={{
        pathname:path,
        state: undefined
      }} />
    }
  
    return (
    <div className="card">
      <div className="card">
        <h1>Welcome</h1>
        <p>Please sign in to continue</p>
      </div>
      <div className="card-body">
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

const mapDispatchToProps =  { loginUser, logoutUser }

export default connect(mapStateToProps, mapDispatchToProps)(Login)