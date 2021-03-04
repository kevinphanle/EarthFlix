import React from "react";
import { connect } from "react-redux";

function Profile(props) {
  let { profile, handleSelectProfile } = props;
  return (
    <div className='thumbnail-box'>
      <button onClick={handleSelectProfile}>
        <img src={profile.photoUrl} className='thumbnail' />
      </button>
      <div className='profile-name'>{profile.name}</div>
    </div>
  );
}

const msp = (state, ownProps) => ({
  profile: ownProps.profile,
  handleSelectProfile: ownProps.handleSelectProfile,
});

const mdp = (dispatch) => ({});

export default connect(msp, mdp)(Profile);
