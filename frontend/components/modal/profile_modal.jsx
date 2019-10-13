import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { setCurrentProfile } from '../../actions/profile_actions';
import * as Images from '../images';


class ProfileModal extends React.Component {
  contructor(props) {
    super(props);
    this.state = {
      profileFormOpen: false,
      input: ""
    }
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value})
    }
  }

  render() {
    let {profiles} = this.props
        let thumbnail = (profiles[0]) ? profiles[0].photoUrl : "";
        let randomThumbnail = randomProfileThumbnail();
        let name = (profiles[0]) ? profiles[0].name : "";
        let profileModalBox;
        let createProfileModalBox;
        if (this.state.profileFormOpen) {
            profileModalBox = "profile_modal_box";
            createProfileModalBox = "create_profile_modal_box active";
        } else {
            profileModalBox = "profile_modal_box active";
            createProfileModalBox = "create_profile_modal_box";            
        }

    return (
      <div className="profile_modal_container">
        <div className="modal_splash_logo_container"><img src={Images.main_logo} className="browse_splash_logo"/></div>
        <div className={profileModalBox}>
            <div className="profile_modal_title">Who's watching?</div>
            <div className="profile_modal_thumbnails_container">
                <div className="profile_modal_thumbnail_box">
                    <button onClick={this.handleSelectProfile}><img src={thumbnail} className="profile_modal_thumbnail" /></button>
                    <div className="profile_modal_name">{name}</div> 
                </div>
                <div className="profile_modal_thumbnail_box">
                    <button onClick={this.handleCreateProfile}><div className="profile_modal_thumbnail"><i className="fas fa-plus-circle"></i></div></button>
                    <div className="profile_modal_name">Add Profile</div> 
                </div>
            </div>
        </div>
        <div className={createProfileModalBox}>
            <h1>Add Profile</h1>
            <h2>Add a profile for another person watching Nomflix.</h2>
            <div className="create_profile_form_box">
                <img src={randomThumbnail} className="profile_modal_thumbnail" />
                <input type="text" onChange={this.update('input')} placeholder="Name"
                    className="create_profile_input"/>
            </div>
            <div className="create_profile_button_box">

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
      setCurrentProfile: (profileId) => dispatch(setCurrentProfile(profileId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileModal);

