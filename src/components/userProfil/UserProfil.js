import React from 'react';
import '../../styles/components/userProfil.css';

function UserProfil({ firstName }) {
  return (
    <div>
      <h2 className="userProfilTitle">
        Bonjour <span className="redText">{firstName}</span>
      </h2>
      <p className="subTitle">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

export default UserProfil;
