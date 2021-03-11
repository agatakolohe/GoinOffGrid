import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import HikeControl from "./HikeControl";
import SignIn from "./SignIn";

class App extends Component {
  state = {
    data: null,
  };
  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/">
            <div className="container">
              <HikeControl />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
