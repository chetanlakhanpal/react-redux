import React, { PureComponent } from 'react'
import { _getUsers } from "../../../src/utils/_DATA";

class Login extends PureComponent {
  async componentDidMount () {
    const users = await _getUsers();
    console.log(users)
  }

  render = () => (
    <div></div>
  )
}

export default Login