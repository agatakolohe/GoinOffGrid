import React from "react";
// import NewHikeForm from "./NewHikeForm";
import MasterForm from "./MasterForm";
import HikeList from "./HikeList";
import HikeDetail from "./HikeDetail";
import EditHikeForm from "./EditHikeForm";

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
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        hikeFormVisibleOnPage: !prevState.hikeFormVisibleOnPage,
      }));
    }
  };

  render() {
    let currentVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentVisibleState = (
        <EditHikeForm
          hike={this.state.selectedHike}
          onEditHike={this.handleEditingHikeInList}
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
        {currentVisibleState}
        <button
          className="btn btn-primary"
          onClick={this.handleClick}
          type="button"
        >
          {buttonText}
        </button>
      </React.Fragment>
    );
  }
}

export default HikeControl;
