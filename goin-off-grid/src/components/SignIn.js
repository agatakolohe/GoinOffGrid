import React, { useEffect } from "react";
import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { useHistory } from 'react-router-dom'; 


let ui = new firebaseui.auth.AuthUI(firebase.auth());
function SignIn() {
  const history = useHistory();
  useEffect(() => {
    // let ui = new firebaseui.auth.AuthUI(firebase.auth());
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          firebase.handleRedirectResult(authResult).then(() => {
            history.push("/"); 
          });

          // ui.delete(); 
        
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return false;
        },
        uiShown: function () {
          // The widget is rendered.
          // Hide the loader.
          // document.getElementById("loader").style.display = "none";
        },
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: "popup",
      signInSuccessUrl: "/signin",
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      // Terms of service url.
      tosUrl: "<your-tos-url>",
      // Privacy policy url.
      privacyPolicyUrl: "<your-privacy-policy-url>",
    };
    // const ui = new firebaseui.auth.AuthUI(firebase.auth());
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
    firebase.auth()
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
        <div id="firebaseui-auth-container"> </div>
        <button onClick={doSignOut} className="btn btn-danger">
          Sign Out
        </button>
      </div>
    </React.Fragment>
  );
}

export default SignIn;
