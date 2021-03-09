import React from "react";
import firebase from "firebase/app";

function SignIn() {
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
        console.log("signup successful");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function () {
        console.log("sign in success");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function doSignOut() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log("success sign out");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }
  return (
    <React.Fragment>
      <div className="container">
        <h1>Create Account</h1>
        <form onSubmit={doSignUp}>
          <div className="form-group">
            <input
              type="text"
              name="email"
              placeholder="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="password"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-info">
            Sign Up
          </button>
        </form>
        <hr />
        <h1>Sign In</h1>
        <form onSubmit={doSignIn}>
          <div className="form-group">
            <input
              type="text"
              name="signInEmail"
              placeholder="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="signInPassword"
              placeholder="password"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Sign In
          </button>
        </form>
        <hr />
        <h1>Sign Out</h1>
        <button onClick={doSignOut} className="btn btn-danger">
          Sign Out
        </button>
      </div>
    </React.Fragment>
  );
}

export default SignIn;
