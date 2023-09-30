import React from "react";
import ViewList from "./components/ViewList";
import Pipeline from "./components/Pipeline";
import ProfileMenu from "./components/ProfileMenu";

const Profile = () => {
  return (
    <div className="profile">
      <div className="left">
        <ViewList />
        <Pipeline />
      </div>
      <div className="right">
        <ProfileMenu/>
      </div>
    </div>
  );
};

export default Profile;
