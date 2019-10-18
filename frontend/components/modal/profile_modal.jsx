import React from 'react';
import { closeModal, openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { setCurrentProfile, fetchProfiles, createProfile } from '../../actions/profile_actions';
import { randomProfileThumbnail } from '../../reducers/selectors';
import * as Images from '../images.js';
import { create } from 'domain';


class ProfileModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: false,
      input: ""
    }

    this.handleSelectProfile = this.handleSelectProfile.bind(this);
    this.handleCreateProfile = this.handleCreateProfile.bind(this);
    this.update = this.update.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.createProfile = this.createProfile.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value})
    }
  }

  handleSelectProfile(e) {
    e.stopPropagation();
    this.props.closeModal();
    this.props.setCurrentProfile(1)
    this.scrollToTop();
  }

  handleCreateProfile(e) {
    e.stopPropagation();
    this.setState({
        formOpen: true,
    })
  }

  handleClose(e) {
    e.stopPropagation();
    this.setState({
      formOpen: false
    })
  }

  createProfile(e) {
    e.preventDefault();
    this.props.createProfile(this.state);
    
  }

  render() {
    let { profiles } = this.props
    let thumbnail = profiles[0] ? profiles[0].photoUrl : "";
    let randomThumbnail = randomProfileThumbnail();
    let name = (profiles[0]) ? profiles[0].name : "";
    let profileModalBox;
    let createProfileModalBox;
    if (this.state.formOpen) {
      profileModalBox = "profile-modal-box";
      createProfileModalBox = "create-profile-modal-box active";
    } else {
      profileModalBox = "profile-modal-box active";
      createProfileModalBox = "create-profile-modal-box";            
    }

    return (
      <div className="profile-modal-container">
        <div className="modal-logo-container">
          <img src={window.mainLogo} className="browse-splash-logo" />
        </div>
        <div className={profileModalBox}>
            <div className="title">Who's watching?</div>
            <div className="thumbnails-container">
                <div className="thumbnail-box">
                  <button onClick={this.handleSelectProfile}>
                    <img src={thumbnail} className="thumbnail" />
                  </button>
                  <div className="profile-name">{name}</div> 
                </div>
                <div className="thumbnail-box create">
                  <button onClick={this.handleCreateProfile}>
                    <div className="thumbnail">
                      <i className="fas fa-plus-circle"></i>
                    </div>
                  </button>
                  <div className="profile-name">Add Profile</div> 
                </div>
            </div>
        </div>
        <div className={createProfileModalBox}>
          <div className="add-profile-text">
            <h1>Add Profile</h1>
            <h2>Add a profile for another person watching Earthflix.</h2>
          </div>
            <div className="create-profile-form-box">
                <img src={randomThumbnail} className="create-profile-thumbnail" />
                <input type="text" onChange={this.update('input')} placeholder="Name"
                    className="create-profile-input"/>
            </div>
            <div className="create-profile-button-box">
            <button onClick={this.createProfile} className="create-profile-btn">
                Continue
              </button>
            <button onClick={this.handleClose}className="cancel-btn">
                Cancel
              </button>
            </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
      profiles: Object.values(state.entities.profiles),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    createProfile: input => dispatch(createProfile(input)),
    setCurrentProfile: (profileId) => dispatch(setCurrentProfile(profileId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileModal);

