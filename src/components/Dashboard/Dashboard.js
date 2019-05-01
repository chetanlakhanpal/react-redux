import React, { PureComponent } from "react";
import { connect } from "react-redux";

class Dashboard extends PureComponent {

  constructor(props){
    super(props)
  }

  componentDidMount() {

  }

  render = () => (<div></div>)

}

const mapStateToProps = (store) => ({questions: store.questions})

export default connect(mapStateToProps)(Dashboard)