import React from "react";
import { withFirestore, isLoaded } from "react-redux-firebase";
import firebase from "firebase/app";
import MasterForm from "./MasterForm";
import HikeList from "./HikeList";
import HikeDetail from "./HikeDetail";

const splashStyles = {
  marginTop: "10%",
  padding: "3%",
  borderRadius: "15px 50px",
  color: "#323f32",
  backgroundColor: "#cbcdcb",
  width: "50%",
  textAlign: "center",
};
const hikerStyle = {
  marginTop: "1%",
  marginBottom: "1%",
};

class HikeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hikeFormVisibleOnPage: false,
      masterHikeList: [],
      selectedHike: null,
      editing: false,
    };
  }

  handleAddingNewHikeToList = (newHike) => {
    const newMasterHikeList = this.state.masterHikeList.concat(newHike);
    this.setState({
      masterHikeList: newMasterHikeList,
      hikeFormVisibleOnPage: false,
    });
  };

  handleChangingSelectedHike = (id) => {
    const selectedHike = this.state.masterHikeList.filter(
      (hike) => hike.id === id
    )[0];
    this.setState({ selectedHike: selectedHike });
  };

  handleDeletingHike = (id) => {
    const newMasterHikeList = this.state.masterHikeList.filter(
      (hike) => hike.id !== id
    );
    this.setState({ masterHikeList: newMasterHikeList, selectedHike: null });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingHikeInList = (hikeToEdit) => {
    const editedMasterHikeList = this.state.masterHikeList
      .filter((hike) => hike.id !== this.state.selectedHike.id)
      .concat(hikeToEdit);
    this.setState({
      masterHikeList: editedMasterHikeList,
      editing: false,
      selectedHike: null,
    });
  };

  handleCompletedHike = (id) => {
    const selectedHike = this.state.masterHikeList.filter(
      (hike) => hike.id === id
    )[0];
    selectedHike.hikeCompleted = true;
    this.setState({ selectedHike: null });
  };

  handleClick = () => {
    if (this.state.selectedHike != null) {
      this.setState({
        hikeFormVisibleOnPage: false,
        selectedHike: null,
        // editing: false,
      });
    } else {
      this.setState((prevState) => ({
        hikeFormVisibleOnPage: !prevState.hikeFormVisibleOnPage,
      }));
    }
  };

  render() {
    const auth = this.props.firebase.auth();

    const password = firebase.auth.EmailAuthProvider.PROVIDER_ID;
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      );
    }
    if (isLoaded(auth) && auth.currentUser == null) {
      return (
        <React.Fragment>
          <div style={splashStyles}>
            <h1>
              Ready to take a hike? <hr />
              To Go Off Grid <br />
              Please Sign In
            </h1>
          </div>
        </React.Fragment>
      );
    }
    if (isLoaded(password) && password != null) {
      let currentVisibleState = null;
      let buttonText = null;
      if (this.state.editing) {
        currentVisibleState = (
          <MasterForm
            hike={this.state.selectedHike}
            onNewHikeCreation={this.handleEditingHikeInList}
          />
        );
        buttonText = "Return to Main Page";
      } else if (this.state.selectedHike != null) {
        currentVisibleState = (
          <HikeDetail
            hike={this.state.selectedHike}
            onClickingDelete={this.handleDeletingHike}
            onClickingEdit={this.handleEditClick}
          />
        );
        buttonText = "Return to Main Page";
      } else if (this.state.hikeFormVisibleOnPage) {
        currentVisibleState = (
          <MasterForm onNewHikeCreation={this.handleAddingNewHikeToList} />
        );
        buttonText = "Return to Main Page";
      } else {
        currentVisibleState = (
          <HikeList
            hikeList={this.state.masterHikeList}
            onHikeSelection={this.handleChangingSelectedHike}
            onClickingCompleteHike={this.handleCompletedHike}
          />
        );
        buttonText = "Add Hike";
      }

      return (
        <React.Fragment>
          <div style={hikerStyle}>
            <img
              src="https://cdn.pixabay.com/photo/2012/04/13/17/52/backpacker-33063_1280.png"
              width="10%"
              height="auto"
              alt="Hiker Vector"
            />
          </div>
          {currentVisibleState}
          <button
            className="btn btn-outline-dark"
            onClick={this.handleClick}
            type="button"
          >
            {buttonText}
          </button>
        </React.Fragment>
      );
    }
  }
}

export default withFirestore(HikeControl);
