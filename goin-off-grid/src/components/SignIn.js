import React, { useEffect } from "react";
import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { useHistory } from "react-router-dom";

let ui = new firebaseui.auth.AuthUI(firebase.auth());
function SignIn() {
  const signInStyles = {
    marginTop: "5%",
    padding: "3%",
    borderRadius: "15px 50px",
    color: "#323f32",
    backgroundColor: "#cbcdcb",
    width: "50%",
    textAlign: "center",
    border: "2px dashed #aca4a4",
  };
  const history = useHistory();
  useEffect(() => {
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          firebase.handleRedirectResult(authResult).then(() => {
            history.push("/");
          });
          //Initially, this was empty. Since I am using a react router in App, this function will redirect to the homepage upon successful signin with authorization. history is the useHistory hook, to give access for me to push the entry onto a the new path which would be the mainpage.
          return false;
        },
        uiShown: function () {},
      },
      signInFlow: "popup",
      signInSuccessUrl: "/signin",
      //this was initially "/" which would redirect to the main page without auth and therefore the page would render with "please sign in"
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      // Terms of service url.
      tosUrl: "<your-tos-url>",
      // Privacy policy url.
      privacyPolicyUrl: "<your-privacy-policy-url>",
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  });

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
        alert("Sign up successful! Please log in.");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function doSignOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("You are signed out. Byeeee!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  return (
    <React.Fragment>
      <div className="container">
        <div style={signInStyles}>
          <h2>Create Account</h2>
          <hr />
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
            <br />
            <button type="submit" className="btn btn-info">
              Sign Up
            </button>
          </form>

          <hr />
          <div id="firebaseui-auth-container"> </div>
          <hr />
          <button onClick={doSignOut} className="btn btn-danger">
            Sign Out
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignIn;
