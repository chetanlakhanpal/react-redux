import React from "react";

const NotFound = (props) => {
  console.log(props)
  // const urlVisitAttempt = sessionStorage.getItem('urlVisitAttempt')
  // const routes = ['/dashboard', '/leaderboard', '/new-question']

  // if(urlVisitAttempt && urlVisitAttempt !== '/login'){
  //   sessionStorage.removeItem('urlVisitAttempt')
  //   if(routes.indexOf(urlVisitAttempt) > -1 ){
  //     return <Redirect to={urlVisitAttempt} />
  //   }
  //   return <Redirect to="/login" />
  // }
  // console.log(location)
  // if(location.pathname != '/login' && !this.props.user){
  //   if(location.pathname !== '/' && location.pathname !== '/logout'){
  //     sessionStorage.setItem('urlVisitAttempt', location.pathname)
  //   }

  return (<div className="card">
    <h1>This page doesn't exist.</h1>
  </div>)
}

export default NotFound