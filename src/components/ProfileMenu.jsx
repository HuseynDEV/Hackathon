import React from "react";

const ProfileMenu = () => {
  return (
    <div className="profile_menu">
      <h1>Profil</h1>
      <div className="line"></div>
      <div className="profile_container">
        <div className="left">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <div className="right">
          <p> <span>Ad Soyad:</span> Hüseyn Zeynallı</p>
          <p> <span>Sosial Media:</span> İnstagram</p>
          <p> <span>İzləyicilər:</span> 50k</p>
          <p className="slogan"> <span>Slogan:</span> Birlikdə böyüyək</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
